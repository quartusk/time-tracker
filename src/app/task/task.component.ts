import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITask } from '../models/task';
import { TaskService } from '../services/task.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  // The index of the task within the containing list.
  @Input() index: number;
  @Output() deleted: EventEmitter<number>;
  @Output() stopped: EventEmitter<number>;

  timer: number;
  // The formatted time to be displayed.
  prettyTime: string;
  // Show whether the timer is running.
  isActive: boolean;
  // Determines whether the task can be stopped or whether the timer can be reset.
  canBeStopped: boolean;

  constructor(private notifyService: NotifyService) {
    this.deleted = new EventEmitter<number>();
    this.stopped = new EventEmitter<number>();

    // Pause all other tasks when a new task is started.
    notifyService.taskStarted.subscribe((id: number) => {
      if (id !== this.task.id) {
        this.pauseTimer();
      }
    });
  }

  ngOnInit() {
    this.setPrettyTime();
    this.isActive = false;
    this.canBeStopped = !(this.task.time.hours === 0 && this.task.time.minutes === 0 && this.task.time.seconds === 0);
  }

  /**
   * Sets the formatted time to be displayed.
   */
  setPrettyTime(): void {
    this.prettyTime = this.determinePrettyTime();
  }

  /**
   * Sets the format of the displayed time.
   */
  determinePrettyTime(): string {
    return `${this.padTime(this.task.time.hours)}:${this.padTime(this.task.time.minutes)}:${this.padTime(this.task.time.seconds)}`;
  }

  /**
   * Pads an integer time value with a leading 0 if it is smaller than 10.
   * @param time The integer time value.
   */
  padTime(time: number): string {
    if (time < 10) {
      return `0${time}`;
    }

    return `${time}`;
  }

  /**
   * Resets the time.
   */
  resetTimer(): void {
    this.pauseTimer();
    this.isActive = false;
    this.task.time.hours = this.task.time.minutes = this.task.time.seconds = 0;
    this.setPrettyTime();
    this.canBeStopped = false;
  }

  /**
   * Starts the timer on a task.
   */
  startTimer(): void {
    if (!this.isActive) {
      if (!this.task.dateStarted) {
        this.task.dateStarted = new Date();
      }

      this.isActive = true;
      const dateStarted: Date = new Date();
      const timeAlreadyElapsed = this.task.time.seconds + this.task.time.minutes * 60 + this.task.time.hours * 3600;
      this.timer = window.setInterval(() => this.increaseTime(dateStarted, timeAlreadyElapsed), 1000);
      this.notifyService.announceTaskStarted(this.task.id);
      this.canBeStopped = true;
    }
  }

  /**
   * Pauses the timer.
   */
  pauseTimer(): void {
    if (this.isActive) {
      this.isActive = false;
      window.clearInterval(this.timer);
    }
  }

  /**
   * Stops the timer and moves a task to the archived list.
   */
  stopTimer(): void {
    this.pauseTimer();
    this.task.dateEnded = new Date();
    this.task.isCurrent = false;
    this.stopped.emit(this.task.id);
  }

  /**
   * Deletes a task.
   */
  delete(): void {
    this.deleted.emit(this.task.id);
  }

  /**
   * Determines the difference in seconds between two dates.
   * @param dateStarted The initial date.
   * @param currentDate The end date.
   */
  private determineDifferenceInTime(dateStarted: any, currentDate: any) {
    return Math.floor(Math.abs(dateStarted - currentDate) / 1000);
  }

  /**
   * Increases the time.
   * @param dateStarted The date the timer was started.
   * @param timeAlreadyElapsed Any time already elapsed on the task.
   */
  private increaseTime(dateStarted: Date, timeAlreadyElapsed: number): void {
    let secondsElapsed = this.determineDifferenceInTime(dateStarted, new Date()) + timeAlreadyElapsed;
    this.task.time.hours = Math.floor(secondsElapsed / 3600);
    secondsElapsed %= 3600;
    this.task.time.minutes = Math.floor(secondsElapsed / 60);
    this.task.time.seconds = secondsElapsed % 60;
    this.setPrettyTime();
  }
}

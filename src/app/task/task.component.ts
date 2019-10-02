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
  @Input() index: number;
  @Output() deleted: EventEmitter<number>;
  @Output() stopped: EventEmitter<number>;
  prettyTime: string;
  timer: number;
  isActive: boolean;
  canBeStopped: boolean;

  constructor(private notifyService: NotifyService) {
    this.deleted = new EventEmitter<number>();
    this.stopped = new EventEmitter<number>();
  
    notifyService.taskStarted.subscribe((task: ITask) => {
      if (task.id !== this.task.id) {
        this.pauseTimer();
      }
    });
  }

  ngOnInit() {
    this.setPrettyTime();
    this.isActive = false;
    this.canBeStopped = !(this.task.time.hours === 0 && this.task.time.minutes === 0 && this.task.time.seconds === 0);
  }

  setPrettyTime(): void {
    this.prettyTime = this.determinePrettyTime();
  }

  determinePrettyTime(): string {
    return `${this.padTime(this.task.time.hours)}:${this.padTime(this.task.time.minutes)}:${this.padTime(this.task.time.seconds)}`;
  }

  padTime(time: number): string {
    if (time < 10) {
      return `0${time}`;
    }

    return `${time}`;
  }

  resetTimer(): void {
    this.pauseTimer();
    this.isActive = false;
    this.task.time.hours = this.task.time.minutes = this.task.time.seconds = 0;
    this.setPrettyTime();
    this.canBeStopped = false;
  }

  startTimer(): void {
    if (!this.isActive) {
      if (!this.task.dateStarted) {
        this.task.dateStarted = new Date();
      }

      this.isActive = true;
      const dateStarted: Date = new Date();
      const timeAlreadyElapsed = this.task.time.seconds + this.task.time.minutes * 60 + this.task.time.hours * 3600;
      this.timer = window.setInterval(() => this.increaseTime(dateStarted, timeAlreadyElapsed), 1000);
      this.notifyService.announceTaskStarted(this.task);
      this.canBeStopped = true;
    }
  }

  pauseTimer(): void {
    if (this.isActive) {
      this.isActive = false;
      window.clearInterval(this.timer);
    }
  }

  stopTimer(): void {
    this.pauseTimer();
    this.task.dateEnded = new Date();
    this.task.isCurrent = false;
    this.stopped.emit(this.task.id);
  }

  delete(): void {    
    this.deleted.emit(this.task.id);
  }

  private determineDifferenceInTime(dateStarted: any, currentDate: any) {
    return Math.floor(Math.abs(dateStarted - currentDate) / 1000);
  }

  private increaseTime(dateStarted: Date, timeAlreadyElapsed: number): void {
    let secondsElapsed = this.determineDifferenceInTime(dateStarted, new Date()) + timeAlreadyElapsed;
    this.task.time.hours = Math.floor(secondsElapsed / 3600);
    secondsElapsed %= 3600;
    this.task.time.minutes = Math.floor(secondsElapsed / 60);
    this.task.time.seconds = secondsElapsed % 60;
    this.setPrettyTime();
  }
}

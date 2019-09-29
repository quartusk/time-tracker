import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask;
  @Input() index: number;
  prettyTime: string;
  timer: number;
  isActive: boolean;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.setPrettyTime();
    this.isActive = false;
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
    }
  }

  pauseTimer(): void {
    if (this.isActive) {
      this.task.dateEnded = new Date();
      this.isActive = false;
      window.clearInterval(this.timer);
      this.saveTask();
    }
  }

  private saveTask(): void {
    this.taskService.saveTask(this.task);
  }

  private determineDifferenceInTime(dateStarted: any, currentDate: any) {
    return Math.floor(Math.abs(dateStarted - currentDate) / 1000);;
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

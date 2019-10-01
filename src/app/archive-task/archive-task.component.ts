import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITask } from '../models/task';

@Component({
  selector: 'app-archive-task',
  templateUrl: './archive-task.component.html',
  styleUrls: ['./archive-task.component.css']
})
export class ArchiveTaskComponent implements OnInit {
  @Input() task: ITask;
  @Input() index: number;
  @Output() deleted: EventEmitter<number>;
  @Output() movedToCurrent: EventEmitter<number>;
  prettyTime: string;

  constructor() {
    this.deleted = new EventEmitter<number>();
    this.movedToCurrent = new EventEmitter<number>();
   }

  ngOnInit() {
    this.setPrettyTime();
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

  delete(): void {    
    this.deleted.emit(this.task.id);
  }

  moveToCurrent(): void {
    this.task.isCurrent = true;
    this.movedToCurrent.emit(this.task.id);
  }
}

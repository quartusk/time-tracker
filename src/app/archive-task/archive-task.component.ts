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
   * Deletes an archived task.
   */
  delete(): void {
    this.deleted.emit(this.task.id);
  }

  /**
   * Moves an archived task back to the current list.
   */
  moveToCurrent(): void {
    this.task.isCurrent = true;
    this.movedToCurrent.emit(this.task.id);
  }
}

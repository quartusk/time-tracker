import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskAddedSource = new Subject<ITask>();
  private taskStartedSource = new Subject<ITask>();
  taskAdded = this.taskAddedSource.asObservable();
  taskStarted = this.taskStartedSource.asObservable();

  saveTask(task: ITask): void {
    localStorage.setItem(`time-tracker-${task.id}`, JSON.stringify(task));
  }

  announceTaskStarted(task: ITask) {
    this.taskStartedSource.next(task);
  }

  announceTaskAdded(task: ITask) {
    this.taskAddedSource.next(task);
  }

  getTask(id: number): Observable<ITask> {
    return of(JSON.parse(localStorage.getItem(`time-tracker-${id}`)));
  }

  getCurrentTasks(): Observable<ITask[]> {
    const tasks: ITask[] = [];
    const highestId = this.getHighestIdSync();

    for (let i = 1; i <= highestId; i++) {
      this.getTask(i).subscribe((task) => {
        if (task !== null && task.isCurrent) {
          tasks.push(task);
        }
      });
    }

    return of(tasks);
  }

  getArchivedTasks(): Observable<ITask[]> {
    const tasks: ITask[] = [];
    const highestId = this.getHighestIdSync();

    for (let i = 1; i <= highestId; i++) {
      this.getTask(i).subscribe((task) => {
        if (task !== null && !task.isCurrent) {
          tasks.push(task);
        }
      });
    }

    return of(tasks);
  }

  delete(id: number): void {
    localStorage.removeItem(`time-tracker-${id}`);
  }

  getHighestId(): Observable<number> {
    return of(this.getHighestIdSync());
  }

  private getHighestIdSync(): number {
    const allEntries = Object.entries(localStorage);
    let highestId = 0;

    for (const entry of allEntries) {
      if (entry[0].toString().indexOf('time-tracker') !== 1) {
        const task: ITask = JSON.parse(entry[1]);

        if (task.id > highestId) {
          highestId = task.id;
        }
      }
    }

    return highestId;
  }
}

import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  saveTask(task: ITask): void {
    localStorage.setItem(`time-tracker-${task.id}`, JSON.stringify(task));
  }

  getTask(id: number): Observable<ITask> {
    return of(JSON.parse(localStorage.getItem(`time-tracker-${id}`)));
  }

  getCurrentTasks(): Observable<ITask[]> {
    const tasks: ITask[] = [];
    const highestId = this.getHighestIdSync();

    for (let i = 1; i <= highestId; i++) {
      this.getTask(i).subscribe((task) => {
        if (task.isCurrent) {
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

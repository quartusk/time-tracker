import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  /**
   * Saves a task to storage.
   * @param task The task to be saved.
   */
  saveTask(task: ITask): void {
    localStorage.setItem(`time-tracker-${task.id}`, JSON.stringify(task));
  }

  /**
   * Returns a task from storage.
   * @param id The task's id.
   */
  getTask(id: number): Observable<ITask> {
    return of(JSON.parse(localStorage.getItem(`time-tracker-${id}`)));
  }

  /**
   * Returns all tasks flagged as current.
   */
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

  /**
   * Returns all tasks flagged as archived.
   */
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

  /**
   * Deletes a task from storage.
   * @param id The task's id.
   */
  delete(id: number): void {
    localStorage.removeItem(`time-tracker-${id}`);
  }

  /**
   * Returns the highest id of a task in storage.
   */
  getHighestId(): Observable<number> {
    return of(this.getHighestIdSync());
  }

  /**
   * Returns the highest id of a task in storage synchronously.
   */
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

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private searchSource = new Subject<string>();
  private taskAddedSource = new Subject<ITask>();
  private taskStartedSource = new Subject<number>();

  search = this.searchSource.asObservable();
  taskAdded = this.taskAddedSource.asObservable();
  taskStarted = this.taskStartedSource.asObservable();

  /**
   * Notifies subscribers that a search has occured.
   * @param searchTerm The searched value.
   */
  announceSearch(searchTerm: string) {
    this.searchSource.next(searchTerm);
  }

  /**
   * Notifies subsribers that a task has been started.
   * @param id The id of the task that has been started.
   */
  announceTaskStarted(id: number) {
    this.taskStartedSource.next(id);
  }

  /**
   * Notifies subsribers that a new task has been created.
   * @param task The task that has been created.
   */
  announceTaskAdded(task: ITask) {
    this.taskAddedSource.next(task);
  }
}

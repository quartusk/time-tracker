import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private searchSource = new Subject<string>();
  private taskAddedSource = new Subject<ITask>();
  private taskStartedSource = new Subject<ITask>();

  search = this.searchSource.asObservable();
  taskAdded = this.taskAddedSource.asObservable();
  taskStarted = this.taskStartedSource.asObservable();

  announceSearch(searchTerm: string) {
    this.searchSource.next(searchTerm);
  }

  announceTaskStarted(task: ITask) {
    this.taskStartedSource.next(task);
  }

  announceTaskAdded(task: ITask) {
    this.taskAddedSource.next(task);
  }

  constructor() { }
}

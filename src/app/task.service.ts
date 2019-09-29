import { Injectable } from '@angular/core';
import { ITask } from './models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  saveTask(task: ITask): void {
    this.setHighestId(task);
    localStorage.setItem(task.id.toString(), JSON.stringify(task));
  }

  getTask(id: number): Observable<ITask> {
    return of(JSON.parse(localStorage.getItem(id.toString())));
  }

  getCurrentTasks(): Observable<ITask[]> {
    const tasks: ITask[] = [];

    for (let i = 1; i <= Number(localStorage.getItem('highest-id')); i++) {
      this.getTask(i).subscribe((task) => {
        if (task.isCurrent) {
          tasks.push(task);
        }
      });
    }

    return of(tasks);
  }

  getHigestId(): Observable<number> {
    if (localStorage.getItem('highest-id')) {
      return of(Number(localStorage.getItem('highest-id')));
    }

    return of(0);
  }

  private setHighestId(task: ITask): void {
    if (localStorage.getItem('highest-id') === null || Number(localStorage.getItem('highest-id')) < task.id) {
      localStorage.setItem('highest-id', task.id.toString());
    }
  }
}

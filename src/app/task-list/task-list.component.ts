import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITask } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: ITask[];

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    taskService.taskAdded.subscribe((task: ITask) => {
      this.tasks.push(task);
    });

    this.taskService.getCurrentTasks().subscribe((currentTasks: ITask[]) => { this.tasks = currentTasks; });
  }

  ngOnDestroy() {
    this.saveTasks();
  }

  ngOnInit() {
    window.onbeforeunload = () => {
      this.saveTasks();
    }
  }

  deleteTask(id: number): void {
    this.taskService.delete(id);
    this.removeTask(id);
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter((val: ITask) => val.id !== id);
  }

  stopTask(id: number): void {
    this.saveTasks();
    this.removeTask(id);
  }

  saveTasks(): void {
    this.tasks.forEach((task: ITask) => {
      this.taskService.saveTask(task);
    });
  }
}

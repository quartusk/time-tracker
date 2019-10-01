import { Component, OnInit } from '@angular/core';

import { ITask } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: ITask[];

  constructor(private taskService: TaskService) {
    taskService.taskAdded.subscribe((task: ITask) => {
      this.tasks.push(task);
    });
  }

  ngOnInit() {
    this.taskService.getHighestId().subscribe((highestId: number) => {
      if (highestId !== 0) {
        this.taskService.getCurrentTasks().subscribe((currentTasks: ITask[]) => { this.tasks = currentTasks; });
      } else {
        this.tasks = [];
      }
    });

    window.onbeforeunload = () => {
      this.tasks.forEach((task: ITask) => {
        this.taskService.saveTask(task);
      });
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((val: ITask) => val.id !== id);
  }
}

import { Component, OnInit } from '@angular/core';

import { ITask } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent implements OnInit {
  tasks: ITask[];

  constructor(private taskService: TaskService) { 
    this.taskService.getArchivedTasks().subscribe((archivedTasks: ITask[]) => { this.tasks = archivedTasks; });
  }

  ngOnInit() {
  }

  deleteTask(id: number): void {
    this.taskService.delete(id);
    this.removeTask(id);
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter((val: ITask) => val.id !== id);
  }

  moveTaskToCurrent(id: number): void {
    this.tasks.forEach((task: ITask) => {
      if (task.id === id) {
        this.taskService.saveTask(task);
        return;
      }
    });

    this.removeTask(id);
  }
}

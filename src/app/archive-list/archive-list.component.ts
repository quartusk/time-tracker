import { Component, OnInit } from '@angular/core';

import { ITask } from '../models/task';
import { TaskService } from '../services/task.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent implements OnInit {
  tasks: ITask[];
  unfilteredTasks: ITask[];

  constructor(private taskService: TaskService, notifyService: NotifyService) {
    notifyService.search.subscribe((searchTerm: string) => {
      this.tasks = this.unfilteredTasks.filter((task: ITask) => {
        return (task.name.indexOf(searchTerm) !== -1 || task.project.indexOf(searchTerm) !== -1);
      });
    });

    this.taskService.getArchivedTasks().subscribe((archivedTasks: ITask[]) => {
      this.tasks = this.unfilteredTasks = archivedTasks;
    });
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

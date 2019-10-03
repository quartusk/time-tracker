import { Component } from '@angular/core';

import { ITask } from '../models/task';
import { TaskService } from '../services/task.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html'
})
export class ArchiveListComponent {
  tasks: ITask[];
  unfilteredTasks: ITask[];

  constructor(private taskService: TaskService, private notifyService: NotifyService) {
    // Filter tasks when search has occured.
    notifyService.search.subscribe((searchTerm: string) => {
      this.pauseAllTasks();

      this.tasks = this.unfilteredTasks.filter((task: ITask) => {
        return (
          task.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1 ||
          task.project.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1);
      });
    });

    // Returns all tasks flagged as archived from storage.
    this.taskService.getArchivedTasks().subscribe((archivedTasks: ITask[]) => {
      this.tasks = this.unfilteredTasks = archivedTasks;
    });
  }

  /**
   * Pauses all tasks;
   */
  pauseAllTasks(): void {
    this.notifyService.announceTaskStarted(-1);
  }

  /**
   * Deletes a task from storage and removes it from the view.
   * @param id The id of the task to be deleted.
   */
  deleteTask(id: number): void {
    this.taskService.delete(id);
    this.removeTask(id);
  }

  /**
   * Removes a task from the view.
   * @param id The id of the task to be removed.
   */
  removeTask(id: number): void {
    this.tasks = this.tasks.filter((val: ITask) => val.id !== id);
  }

  /**
   * Moves an archived task to the current list.
   * @param id The task to be moved.
   */
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

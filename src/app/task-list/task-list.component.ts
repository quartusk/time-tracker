import { Component, OnInit, OnDestroy } from '@angular/core';

import { ITask } from '../models/task';
import { TaskService } from '../services/task.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit, OnDestroy {
  // The tasks displayed.
  tasks: ITask[];
  // All tasks before any search filtering.
  unfilteredTasks: ITask[];

  constructor(private taskService: TaskService, private notifyService: NotifyService) {
    // Add a task when a new task has been created.
    notifyService.taskAdded.subscribe((task: ITask) => {
      this.unfilteredTasks.push(task);
      this.tasks = this.unfilteredTasks;
    });

    // Filter tasks when search has occured.
    notifyService.search.subscribe((searchTerm: string) => {
      this.pauseAllTasks();

      this.tasks = this.unfilteredTasks.filter((task: ITask) => {
        return (
          task.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1 ||
          task.project.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1);
      });
    });

    // Returns all tasks flagged as current from storage.
    taskService.getCurrentTasks().subscribe((currentTasks: ITask[]) => {
      this.tasks = this.unfilteredTasks = currentTasks;
    });
  }

  /**
   * Pauses and save the tasks when Angular destroys the component.
   */
  ngOnDestroy() {
    this.pauseAllTasks();
    this.saveTasks();
  }

  /**
   * Pauses all tasks;
   */
  pauseAllTasks(): void {
    this.notifyService.announceTaskStarted(-1);
  }

  /**
   * Set up a save action when the page is closed/refreshed.
   */
  ngOnInit() {
    window.onbeforeunload = () => {
      this.saveTasks();
    };
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
    this.unfilteredTasks = this.unfilteredTasks.filter((val: ITask) => val.id !== id);
    this.tasks = this.tasks.filter((val: ITask) => val.id !== id);
  }

  /**
   * Saves the status of all tasks and removes a task from the current view.
   * @param id The id of the task to be stopped.
   */
  stopTask(id: number): void {
    this.saveTasks();
    this.removeTask(id);
  }

  /**
   * Saves all tasks to storage.
   */
  saveTasks(): void {
    this.tasks.forEach((task: ITask) => {
      this.taskService.saveTask(task);
    });
  }
}

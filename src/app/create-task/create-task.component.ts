import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { AppComponent } from '../app.component';
import { TaskService } from '../services/task.service';
import { ITask } from '../models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskName: string;
  projectName: string;

  constructor(public dialogRef: MatDialogRef<AppComponent>, private taskService: TaskService) { }

  save(): void {
    this.taskService.getHighestId().subscribe((highestId: number) => {
      const task: ITask = {
        id: highestId + 1,
        name: this.taskName,
        project: this.projectName,
        isCurrent: true,
        time: {
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      };

      this.taskService.saveTask(task);
      this.taskService.announceTaskAdded(task);
      this.dialogRef.close();
    });
  }
}

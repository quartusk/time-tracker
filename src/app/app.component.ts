import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '400px',
    });
  }
}

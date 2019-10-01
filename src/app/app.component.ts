import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navActiveStatus: boolean[];

  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit(): void {
    this.navActiveStatus = [true, false, false];
  }

  setNavActiveStatus(navIndex: number): void {
    for (let i = 0; i < 3; i++) {
      this.navActiveStatus[i] = i === navIndex;
    }
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '400px',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateTaskComponent } from './create-task/create-task.component';
import { NotifyService } from './services/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string;

  constructor(public dialog: MatDialog, private notifyService: NotifyService) {}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '400px',
    });
  }

  search() {
    this.notifyService.announceSearch(this.searchTerm);
  }
}

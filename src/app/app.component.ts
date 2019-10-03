import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateTaskComponent } from './create-task/create-task.component';
import { NotifyService } from './services/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // The value of the search input.
  searchTerm: string;

  constructor(public dialog: MatDialog, private notifyService: NotifyService) {}

  /**
   * Opens a dialog to create a new task.
   */
  openCreateDialog(): void {
    this.notifyService.announceTaskStarted(-1);
    this.dialog.open(CreateTaskComponent, { width: '400px' });
    this.searchTerm = '';
  }

  /**
   * Notifies subscribed components that a search has occured.
   */
  search() {
    this.notifyService.announceSearch(this.searchTerm);
  }
}

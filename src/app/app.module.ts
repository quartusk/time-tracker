import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { ArchiveTaskComponent } from './archive-task/archive-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    CreateTaskComponent,
    ArchiveListComponent,
    ArchiveTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  entryComponents: [
    CreateTaskComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

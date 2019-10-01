import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';

const routes: Routes = [
  { path: 'current', component: TaskListComponent },
  { path: 'archive', component: ArchiveListComponent },
  { path: '', redirectTo: 'current', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

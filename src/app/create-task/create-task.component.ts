import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AppComponent } from '../app.component';
import { TaskService } from '../services/task.service';
import { ITask } from '../models/task';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    private taskService: TaskService,
    private notifyService: NotifyService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      taskName: ['', Validators.required],
      projectName: ['', Validators.required],
    });
  }

  save(form: FormGroup): void {
    this.taskService.getHighestId().subscribe((highestId: number) => {
      const task: ITask = {
        id: highestId + 1,
        name: form.value.taskName,
        project: form.value.projectName,
        isCurrent: true,
        time: {
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      };

      this.taskService.saveTask(task);
      this.notifyService.announceTaskAdded(task);
      this.dialogRef.close();
    });
  }
}

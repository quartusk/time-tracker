import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  navActiveStatus: boolean[];
  tasks: ITask[];

  constructor(private taskService: TaskService) {     
  }

  ngOnInit() {
    this.navActiveStatus = [true, false, false];
    this.taskService.getHigestId().subscribe((highestId: number) => {
      if (highestId != 0) {
        this.taskService.getCurrentTasks().subscribe((currentTasks: ITask[]) => { this.tasks = currentTasks; });
      } else {
        this.tasks = [];        

        this.tasks.push({
          name: 'Task 1',
          project: 'Project 1',
          id: highestId + 1,
          isCurrent: true,
          time: {
            hours: 0,
            minutes: 0,
            seconds: 0
          }
        });

        this.taskService.saveTask(this.tasks[0]);
      }
    });
  }

  setNavActiveStatus(navIndex: number): void {
    for (let i = 0; i < 3; i++) {
      this.navActiveStatus[i] = i === navIndex;
    }
  }

}

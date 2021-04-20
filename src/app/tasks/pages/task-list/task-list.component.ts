import { DeleteTaskService } from './../../business-rules/delete-task.service';
import { GetallTasksService } from './../../business-rules/getall-tasks.service';
import { ITask } from './../../models/itask';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(
    private getallTasksService: GetallTasksService,
    private deleteTaskService: DeleteTaskService
  ) {}

  ngOnInit(): void {
    this.tasks = this.getallTasksService.execute();
  }

  deleteTask(task: ITask) {
    const confirmed = confirm(
      `Você tem certeza que deseja excluir a tarefa "${task.title}"`
    );

    if (confirmed) {
      this.deleteTaskService.execute(task.id || 0);
    }
  }
}

import { Injectable } from '@angular/core';
import { ITask } from './../models/itask';
import { TaskRepositoryService } from './../repositories/task-repository.service';

@Injectable({
  providedIn: 'root',
})
export class GetallTasksService {
  constructor(private repository: TaskRepositoryService) {}

  execute(): ITask[] {
    return this.repository.getAll();
  }
}

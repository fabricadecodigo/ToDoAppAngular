import { Injectable } from '@angular/core';
import { ITask } from './../models/itask';
import { TaskRepositoryService } from './../repositories/task-repository.service';

@Injectable({
  providedIn: 'root',
})
export class GetbyidTaskService {
  constructor(private repository: TaskRepositoryService) {}

  execute(id: number): ITask | undefined {
    try {
      return this.repository.getById(id);
    } catch (error) {
      alert('Tarefa não encontrada');
      return undefined;
    }
  }
}

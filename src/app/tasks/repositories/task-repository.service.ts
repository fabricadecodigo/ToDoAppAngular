import { ITask } from './../models/itask';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryService {
  tasks: ITask[] = [];
  constructor() {}

  save(task: ITask): void {
    if (task.id) {
      const entity = this.getById(task.id);
      entity.title = task.title;
    } else {
      task.id = this.tasks.length + 1;
      this.tasks.push(task);
    }
  }

  getById(id: number): ITask {
    const entity = this.tasks.find((t) => t.id === id);
    if (!entity) {
      throw new Error('Tarefa não encontrada');
    }

    return entity;
  }

  getAll(): ITask[] {
    return this.tasks;
  }

  delete(id: number): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    } else {
      throw new Error('Tarefa não encontrada');
    }
  }
}

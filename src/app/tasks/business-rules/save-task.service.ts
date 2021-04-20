import { Injectable } from '@angular/core';
import { ITask } from './../models/itask';
import { TaskRepositoryService } from './../repositories/task-repository.service';

@Injectable({
  providedIn: 'root',
})
export class SaveTaskService {
  constructor(private repository: TaskRepositoryService) {}

  execute(task: ITask): void {
    try {
      this.repository.save(task);
      alert('Tarefa salva com sucesso');
    } catch (error) {
      alert('Erro ao salvar a tarefa');
    }
  }
}

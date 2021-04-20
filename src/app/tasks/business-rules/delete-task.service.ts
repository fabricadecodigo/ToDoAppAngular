import { Injectable } from '@angular/core';
import { TaskRepositoryService } from '../repositories/task-repository.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteTaskService {
  constructor(private repository: TaskRepositoryService) {}

  execute(id: number): void {
    try {
      this.repository.delete(id);
    } catch (error) {
      alert('Erro ao excluir a tarefa selecionada');
    }
  }
}

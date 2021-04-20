import { SaveTaskService } from './../../business-rules/save-task.service';
import { GetbyidTaskService } from './../../business-rules/getbyid-task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
  });

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  pageTitle = 'Nova tarefa';
  id?: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private getbyidTaskService: GetbyidTaskService,
    private saveTaskService: SaveTaskService
  ) {}

  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = parseInt(idParam, 10);
      this.loadTask(this.id);
    }
  }

  loadTask(id: number): void {
    const task = this.getbyidTaskService.execute(id);
    if (task) {
      this.form.patchValue({
        title: task.title,
      });
    }
  }

  onSubmit(): void {
    this.saveTaskService.execute({
      id: this.id,
      ...this.form.value,
    });
    this.form.reset();
  }
}

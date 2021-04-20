import { TestBed } from '@angular/core/testing';

import { TaskRepositoryService } from './task-repository.service';

describe('TaskRepositoryService', () => {
  let service: TaskRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

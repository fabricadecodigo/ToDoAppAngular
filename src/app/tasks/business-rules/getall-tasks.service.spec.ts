import { TestBed } from '@angular/core/testing';

import { GetallTasksService } from './getall-tasks.service';

describe('GetallTasksService', () => {
  let service: GetallTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

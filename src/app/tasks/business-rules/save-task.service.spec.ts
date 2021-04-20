import { TestBed } from '@angular/core/testing';

import { SaveTaskService } from './save-task.service';

describe('SaveTaskService', () => {
  let service: SaveTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

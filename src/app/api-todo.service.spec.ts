import { TestBed } from '@angular/core/testing';

import { ApiTodoService } from './api-todo.service';

describe('ApiTodoService', () => {
  let service: ApiTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

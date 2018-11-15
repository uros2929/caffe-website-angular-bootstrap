import { TestBed } from '@angular/core/testing';

import { FunctionMinService } from './function-min.service';

describe('FunctionMinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionMinService = TestBed.get(FunctionMinService);
    expect(service).toBeTruthy();
  });
});

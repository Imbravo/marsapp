import { TestBed } from '@angular/core/testing';

import { SumissionService } from './sumission.service';

describe('SumissionService', () => {
  let service: SumissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

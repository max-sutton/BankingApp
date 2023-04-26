import { TestBed } from '@angular/core/testing';

import { TMService } from './tm.service';

describe('TMService', () => {
  let service: TMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

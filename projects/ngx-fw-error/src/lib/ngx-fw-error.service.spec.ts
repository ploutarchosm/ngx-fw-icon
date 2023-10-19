import { TestBed } from '@angular/core/testing';

import { NgxFwErrorService } from './ngx-fw-error.service';

describe('NgxFwErrorService', () => {
  let service: NgxFwErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFwErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

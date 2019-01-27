import { TestBed, inject } from '@angular/core/testing';

import { Toastr, TOKEN_TOASTR } from './toastr.service';

describe('ToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TOKEN_TOASTR]
    });
  });

  it('should be created', inject([TOKEN_TOASTR], (service: Toastr) => {
    expect(service).toBeTruthy();
  }));
});

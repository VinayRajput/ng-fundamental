import { TestBed, inject } from '@angular/core/testing';

import { EventListResovlerService } from './event-list-resovler.service';

describe('EventListResovlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventListResovlerService]
    });
  });

  it('should be created', inject([EventListResovlerService], (service: EventListResovlerService) => {
    expect(service).toBeTruthy();
  }));
});

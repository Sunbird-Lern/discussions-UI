import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';

describe('EventsService', () => {
  let eventsService: EventsService;
  
  beforeAll(() => {
    eventsService = new EventsService();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should be created', () => {
    expect(eventsService).toBeTruthy();
  });
});

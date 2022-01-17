import { TestBed } from '@angular/core/testing';
import { EventsService } from './events.service';

import { WrapperNavigateService } from './wrapper-navigate.service';

describe('WrapperNavigateService', () => {
  let service: WrapperNavigateService;
  const mockEventService: Partial<EventsService> = {};

  beforeAll(() => {
    service = new WrapperNavigateService(
      mockEventService as EventsService
    );
  });
 
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseWrapperComponent } from './base-wrapper.component';
import { EventsService } from '../../events.service';
import { NavigationServiceService } from '../../navigation-service.service';
import { ConfigService } from '../../services/config.service';
import { DiscussionService } from '../../services/discussion.service';

describe('BaseWrapperComponent', () => {
  let component: BaseWrapperComponent;
  let fixture: ComponentFixture<BaseWrapperComponent>;
  const mockNavigationService: Partial<NavigationServiceService> = {};
  const mockConfigService: Partial<ConfigService> = {}
  const mockDiscussionService: Partial<DiscussionService> = {};
  const mockEventService: Partial<EventsService> = {};

  beforeAll(() => {
    component = new BaseWrapperComponent(
      mockNavigationService as NavigationServiceService,
      mockEventService as EventsService,
      mockConfigService as ConfigService,
      mockDiscussionService as DiscussionService,
     )
  })

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

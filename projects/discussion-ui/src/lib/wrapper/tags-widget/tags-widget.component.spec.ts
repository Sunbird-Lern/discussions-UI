import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsService } from '../../events.service';
import { NavigationServiceService } from '../../navigation-service.service';
import { ConfigService } from '../../services/config.service';
import { DiscussionService } from '../../services/discussion.service';
import { TagsWidgetComponent } from './tags-widget.component';

describe('TagsWidgetComponent', () => {
  let component: TagsWidgetComponent;

  const mockDiscussionService: Partial<DiscussionService> = {};
  const mockConfigService: Partial<ConfigService> = {
    getConfig: jest.fn().mockReturnValueOnce({routerSlug: false}),
    getCategories: jest.fn()
  };
  const mockNavigationService: Partial<NavigationServiceService> = {};
  const mockEventService: Partial<EventsService> = {};

  beforeAll(() => {
    component = new TagsWidgetComponent(
      mockConfigService as ConfigService,
      mockDiscussionService as DiscussionService,
      mockNavigationService as NavigationServiceService,
      mockEventService as EventsService
    );
  });
 
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

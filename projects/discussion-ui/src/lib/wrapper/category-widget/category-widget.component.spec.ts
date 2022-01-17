import { ComponentFixture } from '@angular/core/testing';
import { ConfigService } from '../../services/config.service';
import { DiscussionService } from '../../services/discussion.service';
import { NavigationServiceService } from '../../navigation-service.service';
import { EventsService } from '../../events.service';
import { CategoryWidgetComponent } from './category-widget.component';

describe('CategoryWidgetComponent', () => {
  let component: CategoryWidgetComponent;

  const mockDiscussionService: Partial<DiscussionService> = {};
  const mockConfigService: Partial<ConfigService> = {
    getConfig: jest.fn().mockReturnValueOnce({routerSlug: false}),
    getCategories: jest.fn()
  };
  const mockNavigationService: Partial<NavigationServiceService> = {};
  const mockEventService: Partial<EventsService> = {};

  beforeAll(() => {
    component = new CategoryWidgetComponent(
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

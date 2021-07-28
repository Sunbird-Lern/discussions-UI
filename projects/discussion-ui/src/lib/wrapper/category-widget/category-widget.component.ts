import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { DiscussionService } from '../../services/discussion.service';
import * as _ from 'lodash'
import { NavigationServiceService } from '../../navigation-service.service';
import * as CONSTANTS from '../../common/constants.json';
import { EventsService } from '../../events.service';
import { BaseWrapperComponent } from '../base-wrapper/base-wrapper.component';
import { IdiscussionConfig } from '../../models/discussion-config.model';
@Component({
  selector: 'sb-category-widget',
  templateUrl: './category-widget.component.html',
  styleUrls: ['./category-widget.component.css']
})
export class CategoryWidgetComponent extends BaseWrapperComponent {

  detailsToggle = true;
  category = CONSTANTS.STATES.CATEGORY;
  detailsPage = CONSTANTS.STATES.CATEGORY_DETAILS
  homePage = CONSTANTS.STATES.CATEGORY_HOME
  tid: number 
  slug: string 
  context: IdiscussionConfig

  constructor(configSvc: ConfigService, discussionService: DiscussionService, navigationServiceService: NavigationServiceService, eventService: EventsService) {
    super(navigationServiceService, eventService, configSvc, discussionService)
  }


  wrapperInit() {
    this.state = this.detailsPage;
  }

  stateChange(event) {
    this.state = event.action
    if (event.action === this.detailsPage) {
      this.tid = event.tid
      this.slug = event.title
    }
  }

  protected wrapperEventListener(data) {
  }

}

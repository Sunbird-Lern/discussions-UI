import { Component, OnInit, EventEmitter, Output } from '@angular/core';

/* tslint:disable */
import * as _ from 'lodash'
import { DiscussionService } from '../../services/discussion.service';
import { NSDiscussData } from '../../models/discuss.model';
import { TelemetryUtilsService } from './../../telemetry-utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../services/config.service';
import * as CONSTANTS from './../../common/constants.json';
import { DiscussUtilsService } from '../../services/discuss-utils.service';
import { NavigationServiceService } from '../../navigation-service.service';
/* tslint:enable */

@Component({
  selector: 'lib-discuss-tags',
  templateUrl: './discuss-tags.component.html',
  styleUrls: ['./discuss-tags.component.scss']
})
export class DiscussTagsComponent implements OnInit {

  @Output() stateChange: EventEmitter<any> = new EventEmitter();
  query: string;
  filteredTags: NSDiscussData.ITag[];
  showLoader = false;
  queryParam: any;
  paramsSubscription: Subscription;
  getParams: any;
  cIds: any;
  constructor(
    private discussionService: DiscussionService,
    private telemetryUtils: TelemetryUtilsService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private discussUtils: DiscussUtilsService,
    private navigationService: NavigationServiceService
  ) { }

  ngOnInit() {
    this.telemetryUtils.setContext([]);
    this.telemetryUtils.logImpression(NSDiscussData.IPageName.TAGS);

    this.cIds = this.configService.getCategories()
    if (this.configService.hasContext()) {
      this.getContextBasedTags(this.cIds.result)
    } else {
      this.fetchAllTags();
    }

  }

  fetchAllTags() {
    this.showLoader = true;
    this.discussionService.fetchAllTag().subscribe(data => {
      this.showLoader = false;
      this.filteredTags = _.get(data, 'tags');
    }, error => {
      this.showLoader = false;
      // TODO: toaster
      console.log('error fetching tags');
    });
  }

  getContextBasedTags(cid: any) {
    const req = {
      cids: cid
    }
    this.showLoader = true;
    this.discussionService.contextBasedTags(req).subscribe(data => {
      this.showLoader = false;
      this.filteredTags = _.get(data, 'result');
    }, error => {
      this.showLoader = false;
      // TODO: toaster
      console.log('error fetching tags');
    });
  }

  public getBgColor(tagTitle: any) {
    const bgColor = this.discussUtils.stringToColor(tagTitle.toLowerCase());
    const color = this.discussUtils.getContrast();
    return { color, 'background-color': bgColor };
  }

  getAllDiscussions(tag: { value: any }) {
    this.queryParam = tag.value;
    const tagdata = {
      tagname: ''
    };

    tagdata.tagname = tag.value;
    this.queryParam = tagdata;
    const routerSlug = this.configService.getConfig().routerSlug ? this.configService.getConfig().routerSlug : '';
    const input = { data: { url: `${routerSlug}${CONSTANTS.ROUTES.TAG}tag-discussions`,
    queryParams: this.queryParam, tagName: this.queryParam.tagName }, action: 'tagsAll'};
    this.navigationService.navigate(input);
    this.stateChange.emit({ action: CONSTANTS.STATES.TAG_ALL_DISCUSS, title: tag.value, tid: 'sd' });
    // tslint:disable-next-line: max-line-length
    // this.router.navigate([`${this.configService.getRouterSlug()}${CONSTANTS.ROUTES.TAG}tag-discussions`], { queryParams: this.queryParam });
  }

}

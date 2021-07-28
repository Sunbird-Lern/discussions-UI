import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { NSDiscussData } from '../../models/discuss.model';
/* tslint:disable */
import _ from 'lodash'
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import * as CONSTANTS from './../../common/constants.json';
import { NavigationServiceService } from '../../navigation-service.service';

/* tslint:enable */
@Component({
  selector: 'lib-discuss-trending-tags',
  templateUrl: './trending-tags.component.html',
  styleUrls: ['./trending-tags.component.scss'],
})
export class TrendingTagsComponent implements OnInit, OnChanges {
  @Input() tags!: NSDiscussData.ITag[];
  @Output() stateChange: EventEmitter<any> = new EventEmitter();

  max = 0;
  trandingTags!: NSDiscussData.ITag[];
  queryParam: any;
  constructor(
    public router: Router,
    private configService: ConfigService,
    private navigationService: NavigationServiceService
  ) {

  }
  ngOnInit(): void {
    // debugger
    this.max = _.get(_.maxBy(this.tags, 'score'), 'score') || 0;
    this.trandingTags = _.chain(this.tags).orderBy('score', 'desc').take(5).value();
  }

  ngOnChanges(data: SimpleChanges) {
    // debugger
    // this.tableData!.columns = data.tableData.currentValue.columns
    this.tags = _.get(data, 'tags.currentValue')
    this.max = _.get(_.maxBy(this.tags, 'score'), 'score') || 0;
    this.trandingTags = _.chain(this.tags).orderBy('score', 'desc').take(5).value();
  }

  // TODO: To enable trending tags click and navigate to tags detals page
  getAllDiscussions(tag: { value: any }) {
    // debugger
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

  css() {
    // return 'linear - gradient(to left, #00ff00 " + 80 + " %, #ff0000 20 %)"
  }
}
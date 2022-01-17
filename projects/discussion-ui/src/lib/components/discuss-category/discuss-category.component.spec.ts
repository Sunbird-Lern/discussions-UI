import { ActivatedRoute, Router } from "@angular/router";
import { NavigationServiceService } from "../../navigation-service.service";
import { of, throwError } from "rxjs";
import { NSDiscussData } from "../../models/discuss.model";
import { ConfigService } from "../../services/config.service";
import { DiscussionService } from "../../services/discussion.service";
import { TelemetryUtilsService } from "../../telemetry-utils.service";
import { DiscussCategoryComponent } from "./discuss-category.component"

describe('DiscussCategoryComponent', () => {
  let discussCategoryComponent: DiscussCategoryComponent

  const mockDiscussionService: Partial<DiscussionService> = {};
  const mockConfigService: Partial<ConfigService> = {
    getConfig: jest.fn().mockReturnValueOnce({routerSlug: false}),
    getCategories: jest.fn()
  };
  const mockRouter: Partial<Router> = {
    navigate: jest.fn()
  };
  const mockActivatedRoute: Partial<ActivatedRoute> = {};
  const mockTelemetryUtilsService: Partial<TelemetryUtilsService> = {
    setContext: jest.fn(),
    logImpression: jest.fn()
  };
  const mockNavigationService: Partial<NavigationServiceService> = {};

  beforeAll(() => {
    discussCategoryComponent = new DiscussCategoryComponent(
        mockDiscussionService as DiscussionService,
        mockConfigService as ConfigService,
        mockRouter as Router,
        mockActivatedRoute as ActivatedRoute,
        mockTelemetryUtilsService as TelemetryUtilsService,
        mockNavigationService as NavigationServiceService
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should create an instance of DiscussCategoryComponent', () => {
    expect(discussCategoryComponent).toBeTruthy();
  });

  // describe('ngOnInit', () => {
  //   it('should call navigateToDiscussionPage', () => {
  //     // arrange
  //     const params = {
  //       cid: 'some_cid'
  //     } as any
  //     mockActivatedRoute.queryParams = of(params);
  //     jest.spyOn(discussCategoryComponent, 'navigateToDiscussionPage').mockImplementation();
  //     // act
  //     discussCategoryComponent.ngOnInit();
  //     // assert
  //     expect(mockTelemetryUtilsService.logImpression).toHaveBeenCalledWith(NSDiscussData.IPageName.CATEGORY);
  //     expect(mockTelemetryUtilsService.setContext).toHaveBeenCalledWith([]);
  //     expect(discussCategoryComponent.navigateToDiscussionPage).toHaveBeenCalled();
  //   })

  //   it('should call fetchAllAvailableCategories', () => {
  //     // arrange
  //     const params = {
  //     } as any
  //     mockActivatedRoute.queryParams = of(params);
  //     jest.spyOn(discussCategoryComponent, 'fetchAllAvailableCategories').mockImplementation();
  //     // act
  //     discussCategoryComponent.ngOnInit();
  //     // assert
  //     expect(mockTelemetryUtilsService.logImpression).toHaveBeenCalledWith(NSDiscussData.IPageName.CATEGORY);
  //     expect(mockTelemetryUtilsService.setContext).toHaveBeenCalledWith([]);
  //     expect(discussCategoryComponent.fetchAllAvailableCategories).toHaveBeenCalled();
  //   })
  // })

  describe('fetchAllAvailableCategories', () => {
    // it('Should fetch all available categories', (done) => {
    //   // arrange
    //   const categoryResp = {
    //     name : 'name'
    //   } as any
    //   mockDiscussionService.fetchSingleCategoryDetails = jest.fn(() => of(categoryResp))
    //   // act
    //   discussCategoryComponent.fetchAllAvailableCategories(['some_cid'])
    //   // assert
    //   setTimeout(() => {
    //     expect(discussCategoryComponent.showLoader).toBe(false);
    //     expect(mockDiscussionService.fetchSingleCategoryDetails).toHaveBeenCalledWith('some_cid');
    //     expect(discussCategoryComponent.categories).toEqual([categoryResp]);
    //     done();
    //   });
    // })

    // it('Should handle failure scenarion while fetching categories', (done) => {
    //   // arrange
    //   mockDiscussionService.fetchSingleCategoryDetails = jest.fn(() => throwError({}))
    //   // act
    //   discussCategoryComponent.fetchAllAvailableCategories(['some_cid'])
    //   // assert
    //   setTimeout(() => {
    //     expect(discussCategoryComponent.showLoader).toBe(false);
    //     done();
    //   });
    // })
  })

  describe('navigateToDiscussionPage', () => {
    it('should navigate to category page', (done) => {
      // arrange
      mockTelemetryUtilsService.uppendContext = jest.fn();
      const categoryResp = {
        cid : 'some_cid',
        'privileges.topics:create': true,
        children: []
      } as any
      discussCategoryComponent.slug = {routerSlug: false};
      mockConfigService.getConfig = jest.fn().mockReturnValue({routerSlug: false});
      mockDiscussionService.setContext = jest.fn();
      mockConfigService.setCategoryid = jest.fn();
      mockRouter.navigate = jest.fn();
      mockNavigationService.navigate = jest.fn();
      mockDiscussionService.fetchSingleCategoryDetails = jest.fn(() => of(categoryResp))
      // act
      discussCategoryComponent.navigateToDiscussionPage('some_cid')
      // aseert
      setTimeout(() => {
        expect(mockDiscussionService.setContext).toHaveBeenCalled();
        done();
      });
    });

    // it('should handle error scenario', (done) => {
    //   // arrange
    //   mockTelemetryUtilsService.uppendContext = jest.fn();
    //   mockDiscussionService.fetchSingleCategoryDetails = jest.fn(() => throwError('err'))
    //   // act
    //   discussCategoryComponent.navigateToDiscussionPage('some_cid')
    //   // aseert
    //   setTimeout(() => {
    //     expect(discussCategoryComponent.showLoader).toBe(false);
    //     done();
    //   });
    // });
  });

  describe('logTelemetry', () => {
    it('should log telemetry', () => {
      // arrange
      mockTelemetryUtilsService.logInteract = jest.fn();
      // act
      discussCategoryComponent.logTelemetry('some_event')
      // assert
      expect(mockTelemetryUtilsService.logInteract).toHaveBeenCalledWith(
        'some_event',
        NSDiscussData.IPageName.CATEGORY
      )
    })
  })

  describe('startDiscussion', () => {
    it('should open start discussion modal', () => {
      // act
      discussCategoryComponent.startDiscussion();
      // assert
      expect(discussCategoryComponent.showStartDiscussionModal).toBe(true);
    })
  })

  describe('closeModal', () => {
    it('should close start discussion modal', () => {
      // act
      discussCategoryComponent.closeModal('some_event');
      // assert
      expect(discussCategoryComponent.showStartDiscussionModal).toBe(false);
    })
  })

})
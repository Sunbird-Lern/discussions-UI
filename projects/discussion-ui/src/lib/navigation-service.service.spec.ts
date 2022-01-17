import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NavigationServiceService } from './navigation-service.service';
import { RouterServiceService } from './router-service.service';
import { WrapperNavigateService } from './wrapper-navigate.service';

describe('NavigationServiceService', () => {
  let service: NavigationServiceService;
  const mockRouter: Partial<RouterServiceService> = {
    navigate: jest.fn()
  };
  const mockWrapperNavigateService: Partial<RouterServiceService> = {};

  beforeAll(() => {
  service = new NavigationServiceService(
    mockWrapperNavigateService as WrapperNavigateService,
    mockRouter as RouterServiceService
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

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RouterServiceService } from './router-service.service';

describe('RouterServiceService', () => {
  let service: RouterServiceService;
  const mockRouter: Partial<Router> = {
    navigate: jest.fn()
  };

  beforeAll(() => {
  service = new RouterServiceService(
    mockRouter as Router
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

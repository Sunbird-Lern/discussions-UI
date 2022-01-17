import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersComponent } from './sliders.component';

describe('SlidersComponent', () => {
  let component: SlidersComponent;

    beforeAll(() => {
    component = new SlidersComponent();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
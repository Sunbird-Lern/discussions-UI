import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaseWrapperComponent } from './base-wrapper.component';

describe('BaseWrapperComponent', () => {
  let component: BaseWrapperComponent;
  let fixture: ComponentFixture<BaseWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

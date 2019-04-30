import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevDashboardDetailComponent } from './dev-dashboard-detail.component';

describe('DevDashboardDetailComponent', () => {
  let component: DevDashboardDetailComponent;
  let fixture: ComponentFixture<DevDashboardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevDashboardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevDashboardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

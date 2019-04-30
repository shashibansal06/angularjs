import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileEducationComponent } from './view-profile-education.component';

describe('ViewProfileEducationComponent', () => {
  let component: ViewProfileEducationComponent;
  let fixture: ComponentFixture<ViewProfileEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfileEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfileEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEducationDetailComponent } from './profile-education-detail.component';

describe('ProfileEducationDetailComponent', () => {
  let component: ProfileEducationDetailComponent;
  let fixture: ComponentFixture<ProfileEducationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEducationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEducationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGeneralDetailComponent } from './profile-general-detail.component';

describe('ProfileGeneralDetailComponent', () => {
  let component: ProfileGeneralDetailComponent;
  let fixture: ComponentFixture<ProfileGeneralDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGeneralDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGeneralDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

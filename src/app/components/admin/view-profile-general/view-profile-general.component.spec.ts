import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileGeneralComponent } from './view-profile-general.component';

describe('ViewProfileGeneralComponent', () => {
  let component: ViewProfileGeneralComponent;
  let fixture: ComponentFixture<ViewProfileGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfileGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfileGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

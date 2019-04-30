import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevcreateEduDetailComponent } from './devcreate-edu-detail.component';

describe('DevcreateEduDetailComponent', () => {
  let component: DevcreateEduDetailComponent;
  let fixture: ComponentFixture<DevcreateEduDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevcreateEduDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevcreateEduDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

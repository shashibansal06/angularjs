import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevcreateGenDetailComponent } from './devcreate-gen-detail.component';

describe('DevcreateGenDetailComponent', () => {
  let component: DevcreateGenDetailComponent;
  let fixture: ComponentFixture<DevcreateGenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevcreateGenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevcreateGenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

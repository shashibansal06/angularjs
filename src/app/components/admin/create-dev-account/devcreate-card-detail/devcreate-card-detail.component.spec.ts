import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevcreateCardDetailComponent } from './devcreate-card-detail.component';

describe('DevcreateCardDetailComponent', () => {
  let component: DevcreateCardDetailComponent;
  let fixture: ComponentFixture<DevcreateCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevcreateCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevcreateCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

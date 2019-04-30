import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRatingReviewComponent } from './dev-rating-review.component';

describe('DevRatingReviewComponent', () => {
  let component: DevRatingReviewComponent;
  let fixture: ComponentFixture<DevRatingReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevRatingReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevRatingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

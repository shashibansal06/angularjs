import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDevContactEduComponent } from './view-dev-contact-edu.component';

describe('ViewDevContactEduComponent', () => {
  let component: ViewDevContactEduComponent;
  let fixture: ComponentFixture<ViewDevContactEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDevContactEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDevContactEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

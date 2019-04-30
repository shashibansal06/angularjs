import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevInMatchingComponent } from './dev-in-matching.component';

describe('DevInMatchingComponent', () => {
  let component: DevInMatchingComponent;
  let fixture: ComponentFixture<DevInMatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevInMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevInMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

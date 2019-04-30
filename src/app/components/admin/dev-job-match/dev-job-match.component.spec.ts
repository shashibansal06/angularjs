import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevJobMatchComponent } from './dev-job-match.component';

describe('DevJobMatchComponent', () => {
  let component: DevJobMatchComponent;
  let fixture: ComponentFixture<DevJobMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevJobMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevJobMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

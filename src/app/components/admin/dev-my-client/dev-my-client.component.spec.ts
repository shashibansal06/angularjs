import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMyClientComponent } from './dev-my-client.component';

describe('DevMyClientComponent', () => {
  let component: DevMyClientComponent;
  let fixture: ComponentFixture<DevMyClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevMyClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDevContactGenComponent } from './view-dev-contact-gen.component';

describe('ViewDevContactGenComponent', () => {
  let component: ViewDevContactGenComponent;
  let fixture: ComponentFixture<ViewDevContactGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDevContactGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDevContactGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

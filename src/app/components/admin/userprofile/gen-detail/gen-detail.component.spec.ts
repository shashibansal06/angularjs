import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenDetailComponent } from './gen-detail.component';

describe('GenDetailComponent', () => {
  let component: GenDetailComponent;
  let fixture: ComponentFixture<GenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

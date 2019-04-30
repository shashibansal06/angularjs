import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedDeveloperComponent } from './interested-developer.component';

describe('InterestedDeveloperComponent', () => {
  let component: InterestedDeveloperComponent;
  let fixture: ComponentFixture<InterestedDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

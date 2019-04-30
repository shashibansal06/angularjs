import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConcentComponent } from './user-concent.component';

describe('UserConcentComponent', () => {
  let component: UserConcentComponent;
  let fixture: ComponentFixture<UserConcentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConcentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConcentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

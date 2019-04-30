import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRightsideComponent } from './login-rightside.component';

describe('LoginRightsideComponent', () => {
  let component: LoginRightsideComponent;
  let fixture: ComponentFixture<LoginRightsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRightsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRightsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

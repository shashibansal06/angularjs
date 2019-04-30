import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDevAccountComponent } from './create-dev-account.component';

describe('CreateDevAccountComponent', () => {
  let component: CreateDevAccountComponent;
  let fixture: ComponentFixture<CreateDevAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDevAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDevAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

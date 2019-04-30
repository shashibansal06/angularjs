import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourClientsComponent } from './your-clients.component';

describe('YourClientsComponent', () => {
  let component: YourClientsComponent;
  let fixture: ComponentFixture<YourClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

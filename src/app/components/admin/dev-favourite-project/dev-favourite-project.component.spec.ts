import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevFavouriteProjectComponent } from './dev-favourite-project.component';

describe('DevFavouriteProjectComponent', () => {
  let component: DevFavouriteProjectComponent;
  let fixture: ComponentFixture<DevFavouriteProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevFavouriteProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevFavouriteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

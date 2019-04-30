import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDeveloperComponent } from './fav-developer.component';

describe('FavDeveloperComponent', () => {
  let component: FavDeveloperComponent;
  let fixture: ComponentFixture<FavDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

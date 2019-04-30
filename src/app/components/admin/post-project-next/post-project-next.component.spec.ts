import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProjectNextComponent } from './post-project-next.component';

describe('PostProjectNextComponent', () => {
  let component: PostProjectNextComponent;
  let fixture: ComponentFixture<PostProjectNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProjectNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProjectNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

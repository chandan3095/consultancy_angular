import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCoursesComponent } from './online-courses.component';

describe('OnlineCoursesComponent', () => {
  let component: OnlineCoursesComponent;
  let fixture: ComponentFixture<OnlineCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

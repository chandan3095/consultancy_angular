import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDevelopmentCoursesComponent } from './skill-development-courses.component';

describe('SkillDevelopmentCoursesComponent', () => {
  let component: SkillDevelopmentCoursesComponent;
  let fixture: ComponentFixture<SkillDevelopmentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillDevelopmentCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillDevelopmentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

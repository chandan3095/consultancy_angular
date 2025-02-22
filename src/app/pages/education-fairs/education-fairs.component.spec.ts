import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationFairsComponent } from './education-fairs.component';

describe('EducationFairsComponent', () => {
  let component: EducationFairsComponent;
  let fixture: ComponentFixture<EducationFairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationFairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationFairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

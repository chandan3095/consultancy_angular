import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaPrepClassesComponent } from './mba-prep-classes.component';

describe('MbaPrepClassesComponent', () => {
  let component: MbaPrepClassesComponent;
  let fixture: ComponentFixture<MbaPrepClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MbaPrepClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MbaPrepClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

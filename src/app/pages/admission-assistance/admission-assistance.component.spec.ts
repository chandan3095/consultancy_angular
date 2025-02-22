import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionAssistanceComponent } from './admission-assistance.component';

describe('AdmissionAssistanceComponent', () => {
  let component: AdmissionAssistanceComponent;
  let fixture: ComponentFixture<AdmissionAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionAssistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmissionAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

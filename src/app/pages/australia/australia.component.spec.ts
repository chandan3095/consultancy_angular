import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaComponent } from './australia.component';

describe('AustraliaComponent', () => {
  let component: AustraliaComponent;
  let fixture: ComponentFixture<AustraliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AustraliaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

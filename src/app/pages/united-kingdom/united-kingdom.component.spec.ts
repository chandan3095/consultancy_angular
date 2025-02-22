import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedKingdomComponent } from './united-kingdom.component';

describe('UnitedKingdomComponent', () => {
  let component: UnitedKingdomComponent;
  let fixture: ComponentFixture<UnitedKingdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitedKingdomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitedKingdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

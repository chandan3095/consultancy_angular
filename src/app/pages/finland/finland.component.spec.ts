import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinlandComponent } from './finland.component';

describe('FinlandComponent', () => {
  let component: FinlandComponent;
  let fixture: ComponentFixture<FinlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinlandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

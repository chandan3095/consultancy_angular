import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScotlandComponent } from './scotland.component';

describe('ScotlandComponent', () => {
  let component: ScotlandComponent;
  let fixture: ComponentFixture<ScotlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScotlandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScotlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

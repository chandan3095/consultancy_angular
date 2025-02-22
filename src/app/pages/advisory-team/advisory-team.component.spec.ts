import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryTeamComponent } from './advisory-team.component';

describe('AdvisoryTeamComponent', () => {
  let component: AdvisoryTeamComponent;
  let fixture: ComponentFixture<AdvisoryTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisoryTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisoryTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

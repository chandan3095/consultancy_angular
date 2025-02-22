import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaPgdmComponent } from './mba-pgdm.component';

describe('MbaPgdmComponent', () => {
  let component: MbaPgdmComponent;
  let fixture: ComponentFixture<MbaPgdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MbaPgdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MbaPgdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

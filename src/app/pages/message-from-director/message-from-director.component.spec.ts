import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFromDirectorComponent } from './message-from-director.component';

describe('MessageFromDirectorComponent', () => {
  let component: MessageFromDirectorComponent;
  let fixture: ComponentFixture<MessageFromDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageFromDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageFromDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

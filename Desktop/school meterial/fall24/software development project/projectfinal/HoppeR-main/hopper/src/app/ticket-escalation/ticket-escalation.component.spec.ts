import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEscalationComponent } from './ticket-escalation.component';

describe('TicketEscalationComponent', () => {
  let component: TicketEscalationComponent;
  let fixture: ComponentFixture<TicketEscalationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketEscalationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketEscalationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

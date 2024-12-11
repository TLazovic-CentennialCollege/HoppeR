import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketClosureComponent } from './ticket-closure.component';

describe('TicketClosureComponent', () => {
  let component: TicketClosureComponent;
  let fixture: ComponentFixture<TicketClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketClosureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

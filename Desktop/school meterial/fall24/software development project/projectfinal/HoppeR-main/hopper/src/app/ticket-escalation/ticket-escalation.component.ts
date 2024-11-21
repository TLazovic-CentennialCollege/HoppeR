import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-escalation',
  templateUrl: './ticket-escalation.component.html',
  styleUrls: ['./ticket-escalation.component.css']
})
export class TicketEscalationComponent {
  departments = ['Management', 'Support', 'HR', 'IT', 'Sales']; // List of departments
  selectedDepartment = 'Management'; // Default selected department
  message = ''; // User's message

  constructor(private router: Router) {}

  /**
   * Navigate back to the home page
   */
  goToHome(): void {
    console.log('Navigating to Home...');
    this.router.navigate(['/main']); // Replace '/main' with the correct route to your main page
  }

  /**
   * Handle the discard button click
   */
  discardEscalation(): void {
    console.log('Escalation discarded.');
    this.message = ''; // Clear the message
    this.selectedDepartment = 'Management'; // Reset the dropdown
  }

  /**
   * Handle the forward button click
   */
  forwardEscalation(): void {
    console.log('Forwarding to:', this.selectedDepartment);
    console.log('Message:', this.message);
    alert(`Escalation sent to ${this.selectedDepartment}: ${this.message}`);
  }
}

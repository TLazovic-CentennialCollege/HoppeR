import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  tickets = [
    { id: 1, details: 'Ticket #1: Issue with login.' },
    { id: 2, details: 'Ticket #2: Unable to access dashboard.' },
    { id: 3, details: 'Ticket #3: Request for new user setup.' }
  ];
  editedTicketId: number | null = null;
  updatedDetails: string = '';
  
  constructor(private router: Router) {} 
 /**
   * Navigate to edit the ticket
   * @param ticket - The ticket to edit
   */
 editTicket(ticket: any): void {
  console.log('Navigating to edit Ticket ID:', ticket.id);
  this.router.navigate(['/ticket', ticket.id]); // Ensure `/ticket/:id` is defined in routes
}

/**
 * Delete a ticket
 * @param ticketId - The ID of the ticket to delete
 */
deleteTicket(ticketId: number): void {
  this.tickets = this.tickets.filter(ticket => ticket.id !== ticketId);
  console.log(`Ticket with ID ${ticketId} deleted.`);
}




  goToHome(): void {
    console.log('Navigating to Home...');
    this.router.navigate(['/login']); 
  }

  openSettings(): void {
    console.log('Opening Settings...');
    this.router.navigate(['/settings']); // setting placeholder
  }


  addTicket(): void {
    console.log('Adding a new ticket...');
    // Add logic for creating a new ticket
  }
}

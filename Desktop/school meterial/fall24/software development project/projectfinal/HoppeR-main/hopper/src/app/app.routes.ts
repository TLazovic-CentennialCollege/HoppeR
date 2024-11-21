import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TicketEscalationComponent } from './ticket-escalation/ticket-escalation.component';
//import { LoginComponent } from './login/login.component';
//import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'main', component: MainComponent },  
  { path: 'escalation', component: TicketEscalationComponent } 
  //{ path: 'ticket/:id', component: TicketDetailsComponent },   ticket detail page       
];


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

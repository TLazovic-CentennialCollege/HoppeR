import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'settings',
    component: TicketEditComponent,
  },
  // {
  //   path: 'ticketCreation',
  //   component: TicketCreationComponent,
  // },
  {
    path: 'ticketedit',
    component: TicketEditComponent,
  },
  {
    path: 'ticketedit',
    component: TicketEditComponent,
  },
  // {
  //   path: 'messageCreation',
  //   component: MessageCreationComponent,
  // },
  // {
  //   path: 'ticketClosure',
  //   component: TicketClosureComponent,
  // },
  // {
  //   path: 'ticketEscalation',
  //   component: TicketEscalationComponent,
  // },
];

// Not going to use Modules(for routing)
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

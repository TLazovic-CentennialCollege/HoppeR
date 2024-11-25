import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

//primeNG imports
import { PrimengModule } from '../../primeng.module';
import { NgStyle } from '@angular/common';

//My imports
import { UserService } from '../services/user.service';
import { RouterService } from '../services/RouterService';
import { StatusEnum } from '../services/StatusEnum';

@Component({
  selector: 'app-ticket-edit',
  standalone: true,
  imports: [PrimengModule, NgStyle],
  templateUrl: './ticket-edit.component.html',
  styleUrl: './ticket-edit.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TicketEditComponent {
  private userService = inject(UserService);
  private routerService = inject(RouterService);
  // @Input({ required: true }) ticketStatus!: string;
  statusEnum = StatusEnum;
  user = this.userService.getLoggedInUser();
  public ticketStatus = 'open';

  getTicketStatusButtonStyling() {
    let styleOBJ = { background: 'green' };
    if (this.ticketStatus == this.statusEnum.AttentionRequired) {
      styleOBJ = { background: 'yellow' };
    }
    return styleOBJ;
  }
}

import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

//primeNG imports
import { PrimengModule } from '../../primeng.module';

//my imports
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [PrimengModule, FormsModule],
})
export class LoginComponent {
  @Input({ required: true }) username!: string;
  @Input({ required: true }) password!: string;

  loginService = inject(LoginService);

  onLoginAttempt() {
    // start login process
    console.log(
      'Login Attempted:\n-username: ' +
        this.username +
        '\n-password: ' +
        this.password
    );
    this.loginService.authenticateUserLogin(this.username, this.password);
  }

  // when user opts to press enter instead of clicking login button
  onEnterButtonPress() {
    this.onLoginAttempt();
  }
}

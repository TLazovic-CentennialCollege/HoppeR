import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from '../primeng.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimengModule],
  templateUrl: './app.component.html',
  styleUrl: '../../src/styles.css',
})
export class AppComponent {
  title = 'hopper';
}

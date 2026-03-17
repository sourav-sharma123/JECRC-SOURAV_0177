import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';

@Component({
  selector: 'app-root',
  imports: [AppointmentComponent],
  template: '<app-appointment></app-appointment>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospital-app';
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  patientName = '';
  doctor = '';
  date = '';
  type = '';
  symptoms = '';
  fee = 0;

  minDate = '';
  message = '';

  constructor() {
    // Disable past dates
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  updateFee() {
    if (this.type === 'Online') {
      this.fee = 300;
    } else if (this.type === 'Offline') {
      this.fee = 500;
    } else {
      this.fee = 0;
    }
  }

  bookAppointment() {
    if (!this.patientName || !this.doctor || !this.date || !this.type) {
      this.message = "⚠️ Please fill all required fields!";
      return;
    }

    this.message = "✅ Appointment Booked Successfully!";

    // Optional: Reset form
    this.patientName = '';
    this.doctor = '';
    this.date = '';
    this.type = '';
    this.symptoms = '';
    this.fee = 0;
  }
}
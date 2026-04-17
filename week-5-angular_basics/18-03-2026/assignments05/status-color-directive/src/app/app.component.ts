import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusColorDirective } from './status-color.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StatusColorDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students = [
    { name: 'Bhanu', marks: 95 },
    { name: 'Rahul', marks: 40 },
    { name: 'Priya', marks: 67 },
    { name: 'Amit', marks: 30 }
  ];

}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoleDirective } from './role.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RoleDirective,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'role-based-directive';
  users = [
    { name: 'Bhanu', role: 'admin' },
    { name: 'Rahul', role: 'user' },
    { name: 'Priya', role: 'manager' }
  ];

  selectedUser = this.users[0]; 
}

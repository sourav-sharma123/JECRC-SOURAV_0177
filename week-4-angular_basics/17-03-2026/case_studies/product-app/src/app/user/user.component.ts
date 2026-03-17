import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = 'My App';
  users = [
    "John",
    "David",
    "Priya",
    "Anita"
  ];
  user = {name: 'John', age: 30};
getGreeting()
{
  return "Welcome" + this.user.name;
}
}



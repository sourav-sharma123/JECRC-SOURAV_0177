import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClickBlockDirective } from './click-block.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ClickBlockDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allowClick: boolean = true;

  togglePermission() {
    this.allowClick = !this.allowClick;
  }

  performAction() {
    alert('✅ Action performed!');
  }

}
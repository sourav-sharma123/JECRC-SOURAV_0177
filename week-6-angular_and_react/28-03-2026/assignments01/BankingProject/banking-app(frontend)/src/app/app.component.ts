import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecordTableComponent } from './record-table/record-table.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecordTableComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banking-app';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxjsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_demo';
}

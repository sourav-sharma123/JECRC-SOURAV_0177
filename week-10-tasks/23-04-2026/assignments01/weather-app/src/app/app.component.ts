// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'weather-app';
// }

import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData = [
    {
      name: 'Mumbai',
      temperature: '32°C',
      wind: '18 km/h',
      humidity: '70%'
    },
    {
      name: 'Delhi',
      temperature: '38°C',
      wind: '12 km/h',
      humidity: '45%'
    },
    {
      name: 'Jaipur',
      temperature: '35°C',
      wind: '16 km/h',
      humidity: '40%'
    },
    {
      name: 'Bangalore',
      temperature: '26°C',
      wind: '10 km/h',
      humidity: '60%'
    },
    {
      name: 'Chennai',
      temperature: '34°C',
      wind: '20 km/h',
      humidity: '75%'
    }
  ];
}
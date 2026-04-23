// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-weather',
//   imports: [],
//   templateUrl: './weather.component.html',
//   styleUrl: './weather.component.css'
// })
// export class WeatherComponent {

// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface WeatherRecord {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() weatherData: WeatherRecord[] = [];

  cityName: string = '';
  matchedWeather: WeatherRecord | null = null;
  searched: boolean = false;

  onSearch(): void {
    const input = this.cityName.trim().toLowerCase();

    if (!input) {
      this.searched = false;
      this.matchedWeather = null;
      return;
    }

    this.searched = true;

    this.matchedWeather =
      this.weatherData.find(
        (item) => item.name.trim().toLowerCase() === input
      ) || null;
  }

  clearSearch(): void {
    this.cityName = '';
    this.searched = false;
    this.matchedWeather = null;
  }
}
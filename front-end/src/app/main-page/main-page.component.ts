import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  today: any = Date.now();
  weathers1: any = {};
  weathers2: any = {};
  current_temp: number;
  coord_lat: number;
  coord_lng: number;
  degrees: string;
  x: any;

  lat: number;
  lng: number;

  constructor(private weather: AppService, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit() {
    if(navigator.geolocation) {
      console.log('11111');
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.current();
        this.forecastcoords();
      });
    } else {
      this.lat = 51.5073;
      this.lng = -0.1277
    }
  }

  current() {
    this.weather.getCurrent(this.lat, this.lng)
    .subscribe(res => {
      this.weathers1 = res;
      console.log(this.weathers1);
      this.current_temp = Math.round(res.main.temp);
      this.coord_lat = Math.round(res.coord.lat);
      this.coord_lng = Math.round(res.coord.lon);
      function getDegrees(degree = res.wind.deg) {
        if(degree>337.5) return 'Northerly';
        if(degree>292.5) return 'North Westerly';
        if(degree>247.5) return 'Westerly';
        if(degree>202.5) return 'South Westerly';
        if(degree>157.5) return 'Southerly';
        if(degree>122.5) return 'South Easterly';
        if(degree>67.5) return 'Easterly';
        if(degree>22.5){return 'North Easterly';}
        return 'Northerly';
      }
      this.degrees = getDegrees(this.x);
    }, err => {
      console.error(err);
    });
  }
  forecastcoords() {
    this.weather.getForecastCoords(this.lat, this.lng)
    .subscribe(res => {
      this.weathers2 = res;
    }, err => {
      console.error(err);
    })
  }
}

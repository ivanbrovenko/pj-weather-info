import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forecast-data',
  templateUrl: './forecast-data.component.html',
  styleUrls: ['./forecast-data.component.css']
})
export class ForecastDataComponent implements OnInit {

  City: any;
  cities: any = [];
  weathers: any = {};

  formGroup: FormGroup;

  constructor(private weather: AppService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.weather.getCity()
    .subscribe(res => {
      this.cities = res;
    }, err => {
      console.error(err)
    });
    this.formGroup = new FormGroup({
      city_name: new FormControl('', Validators.required)
    })
  }

  forecast() {
    this.weather.getForecast(this.City.city_name)
    .subscribe(res => {
      console.log(res);
      this.weathers = res;
    }, err => {
      console.error(err);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  City: any;
  city: any = {};
  cities: any = [];

  constructor(private addcity: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.addcity.getCity()
        .subscribe(res => {
          this.cities = res;
        }, err => {
          console.error(err)
        });
  }

  onSubmit() {
    this.addcity.addCity(this.city)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    }, err => {
      console.error(err);
    })
  }

  onDelete(id) {
    this.addcity.deleteCity(id)
    .subscribe(res => {
      console.log(res);
      window.location.reload()
    }, err => {
      console.error(err)
    })
  }

}

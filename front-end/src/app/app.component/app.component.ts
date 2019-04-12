import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from "../services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  city: any = {};

constructor(private router: Router, private route: ActivatedRoute, private addcity: AppService) {
  setTheme('bs4');
 }

  onSubmit() {
    this.addcity.addCity(this.city)
      .subscribe(res => {
        console.log(res);
        this.city = '';
      }, err => {
        console.error(err);
      })
  }

  title = 'app';
}

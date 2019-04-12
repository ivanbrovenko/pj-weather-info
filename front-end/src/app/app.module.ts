import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppService } from './services/app.service';

import { routes } from './app.routing';
import { AppComponent } from './app.component/app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForecastDataComponent } from './main-page/forecast-data/forecast-data.component';
import { AddCityComponent } from './main-page/add-city/add-city.component';
import { OrderByPipe } from './main-page/order-by-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NotFoundComponent,
    ForecastDataComponent,
    OrderByPipe,
    AddCityComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot( routes ),
    HttpClientModule,
    FormsModule
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {  }

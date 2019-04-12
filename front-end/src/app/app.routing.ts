import { Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForecastDataComponent } from './main-page/forecast-data/forecast-data.component';
import { AddCityComponent } from './main-page/add-city/add-city.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main-page' },
    { 
        path: 'main-page', 
        component: MainPageComponent,
        children: [
            { path: 'forecast-data', component: ForecastDataComponent },
            { path: 'add-city', component: AddCityComponent }
        ]
     },
    { path: '**', component: NotFoundComponent }
]

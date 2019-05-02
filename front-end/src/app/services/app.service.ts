import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

const url = 'http://localhost:3000';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

@Injectable()
export class AppService {
  subject = new BehaviorSubject({});

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  getCurrent(data: { lat: number, lng: number }) {
    const options = data ?
      {params: new HttpParams().set('lat', data.lat.toString()).set('lng', data.lng.toString())} : {};
    return this.http.get(`${url}/current-position/weather-data`, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  getForecastData(data: { lat: number, lng: number }) {
    const options = data ?
      {params: new HttpParams().set('lat', data.lat.toString()).set('lng', data.lng.toString())} : {};
    return this.http.get(`${url}/current-position/forecast-weather-data`, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  getForecast(): Observable<any> {
    return this.http.get(`${url}/current-position/get-weather-by-city`).pipe(
      catchError(this.handleError)
    )
  }

  addNewCity(city) {
    return this.http.post(`${url}/api-city/add-city`, city)
      .pipe(
        catchError(this.handleError)
      )
  }
}


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
    constructor(private http: HttpClient) {  }

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

    getCurrent(lat: number, lng: number): Observable<any> {
      console.log('22222');
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=c308d9f307529fb075e0920a02f8ff75&units=metric`).pipe(
          catchError(this.handleError)
   )
    }

   getForecastCoords(lat: number, lng: number): Observable<any> {
     return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&APPID=c308d9f307529fb075e0920a02f8ff75&units=metric`).pipe(
       catchError(this.handleError)
     )
   }

    getForecast(cityinfo): Observable<any> {
        return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityinfo}&APPID=c308d9f307529fb075e0920a02f8ff75&units=metric`).pipe(
          catchError(this.handleError)
        )
    }

    addCity(data) {
      return this.http.post(`${url}/api-city/city-create`, data)
        .pipe(
          catchError(this.handleError)
      )
    }

    getCity() {
      return this.http.get(`${url}/api-city/cities`)
        .pipe(
          catchError(this.handleError)
        )

    }

    deleteCity(id: string): Observable<{}> {
      return this.http.delete(`${url}/api-city/delete-city/${id}`).pipe(
        catchError(this.handleError)
      )
    }
 }

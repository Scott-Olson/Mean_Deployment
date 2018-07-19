import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChicagoService {

  constructor(private _http: HttpClient) {	}

  getWeather(): any {
  	console.log('in chicago service, weather')
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=chicago,usa&APPID=68f4170b75a5928c618f5ed87827ba91')
  }

}

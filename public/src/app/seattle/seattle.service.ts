import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeattleService {

  constructor( private _http: HttpClient) { }

  getWeather(): any {
  	console.log('in seattle service, weather')
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle,usa&APPID=68f4170b75a5928c618f5ed87827ba91')
  }
}

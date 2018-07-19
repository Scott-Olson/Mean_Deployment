import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BurbankService {

  constructor(private _http: HttpClient) { 
  	console.log('hello, in burbank service')
  }
  		
  BurbankWeather(): any {
  	console.log('in burbank service, weather')
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank,usa&APPID=68f4170b75a5928c618f5ed87827ba91')
  }
}

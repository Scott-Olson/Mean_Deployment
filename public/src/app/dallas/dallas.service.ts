import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DallasService {

  constructor(private _http: HttpClient) {

}

getWeather(){
	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=dallas,usa&APPID=68f4170b75a5928c618f5ed87827ba91')
}
}

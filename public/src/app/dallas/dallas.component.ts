import { Component, OnInit } from '@angular/core';
import { DallasService } from './dallas.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
	weather: any;

	constructor( private _dallasService: DallasService) { 
  	this.getWeather();
	}

  	ngOnInit() {
  	}

  	getWeather(){
  		console.log('in dallas comp getWeather()')
	  	const obs = this._dallasService.getWeather();
	  	obs.subscribe( res => {
	  		console.log('dallas weather found', res);
	  		this.weather = res;
	  	}
  	)}

}

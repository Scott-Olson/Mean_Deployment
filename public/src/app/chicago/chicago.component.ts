import { Component, OnInit } from '@angular/core';
import { ChicagoService } from './chicago.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
	weather: any;
	constructor( private _chicagoService: ChicagoService) { 
		console.log('in chicago weather const')
  		console.log(this._chicagoService)
  		this.getWeather(); 
  	}

	ngOnInit() {
	}

	getWeather(){
	  	console.log('in chicago comp getWeather()')
	  	const obs = this._chicagoService.getWeather();
	  	obs.subscribe( res => {
	  		console.log('chicago weather found', res);
	  		this.weather = res;
	  	})
  }
}

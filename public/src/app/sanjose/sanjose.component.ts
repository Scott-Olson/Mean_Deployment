import { Component, OnInit } from '@angular/core';
import { SanjoseService } from './sanjose.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
	weather: any;
  constructor( private _sanjoseService: SanjoseService) { 
  	this.getWeather();
   }

  ngOnInit() {
  }

  getWeather(): any {
  	console.log('in sanjose comp getWeather()')
	  	const obs = this._sanjoseService.getWeather();
	  	obs.subscribe( res => {
	  		console.log('sanjose weather found', res);
	  		this.weather = res;
	  	})
  }
}

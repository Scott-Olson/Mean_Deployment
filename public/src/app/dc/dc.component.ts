import { Component, OnInit } from '@angular/core';
import { DcService } from './dc.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
	weather: any;
  constructor( private _dcService: DcService) { 
  	this.getWeather();
  }

  ngOnInit() {
  }

  getWeather(){
	  	console.log('in dc comp getWeather()')
	  	const obs = this._dcService.getWeather();
	  	obs.subscribe( res => {
	  		console.log('dc weather found', res);
	  		this.weather = res;
	  	})
  }

}

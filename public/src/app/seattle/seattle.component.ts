import { Component, OnInit } from '@angular/core';
import { SeattleService } from './seattle.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	weather: any;
  constructor(private _seattleService: SeattleService) { 
  	this.getWeather();
  }

  ngOnInit() {
  }

  getWeather(){
  	console.log('in seattle comp getWeather()')
	  	const obs = this._seattleService.getWeather();
	  	obs.subscribe( res => {
	  		console.log('seattle weather found', res);
	  		this.weather = res;
	  	})
  }

}

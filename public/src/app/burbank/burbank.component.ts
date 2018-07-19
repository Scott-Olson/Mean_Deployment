console.log('burbank component');
import { Component, OnInit } from '@angular/core';
import { BurbankService } from './burbank.service';
// console.log(BurbankService)
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
	weather: any;

  constructor(private _burbankService: BurbankService){
  		console.log('in burbank weather const')
  		console.log(this._burbankService)
  		this.getWeather(); 
  	}

  ngOnInit() {
  	

  }
  // test() {

  // }

  getWeather(){
  	console.log('in burbank comp getWeather()')
  	const obs = this._burbankService.BurbankWeather();
  	obs.subscribe( res => {
  		console.log('burbank weather found', res);
  		this.weather = res;
  	})
  }

}

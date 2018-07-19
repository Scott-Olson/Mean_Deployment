import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather API V2';

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
    // private _weatherService: WeatherService
  	){}

  ngOnInit(){
  	this._route.params.subscribe((params: Params) => console.log(params));
  }

}

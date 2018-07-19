import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//components
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

//services
import { SeattleService } from './seattle/seattle.service';
import { SanjoseService } from './sanjose/sanjose.service';
import { BurbankService } from './burbank/burbank.service';
import { DallasService } from './dallas/dallas.service';
import { DcService } from './dc/dc.service';
import { ChicagoService } from './chicago/chicago.service';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  SeattleService, 
  SanjoseService, 
  BurbankService, 
  DallasService, 
  DcService, 
  ChicagoService, 
  WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

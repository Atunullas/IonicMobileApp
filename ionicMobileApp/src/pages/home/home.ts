import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;

  location:{
    lattitude: string,
    longitude:string
  }

  
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){
    this.location =  {
      lattitude :"37.8267",
      longitude : "-122.4233"
    }

    this.weatherProvider.getWeather(this.location.lattitude,this.location.longitude)
    .subscribe(weather => {
     this.weather = weather.currently;
    });
  }

}

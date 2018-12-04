import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    latitude: string;
    longitude: string;
  }

  constructor(public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private geolocation: Geolocation,
    private storage: Storage) {

  }

  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if (val != null) {
        console.log(val);
          this.location = JSON.parse(val);
          this.weatherProvider.getWeather(this.location.latitude, this.location.longitude)
          .subscribe(weather => {
            this.weather = weather;
          });
      } else {
        this.geolocation.getCurrentPosition().then((resp) => {
          this.weatherProvider.getWeather(resp.coords.latitude, resp.coords.longitude)
            .subscribe(weather => {
              this.weather = weather;
            });
        }).catch((error) => { console.log('Error getting location', error); });
      }
    });


  }

}

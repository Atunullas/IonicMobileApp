import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey: "8a40f4e6d4bd0231d4cfc35892e059da";
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = "https://api.darksky.net/forecast/" + "8a40f4e6d4bd0231d4cfc35892e059da";
    console.log('Hello WeatherProvider Provider' + this.url);
  }

  getWeather(lattitude, longitude) {
    return this.http.get(this.url + "/" + lattitude + "," + longitude)
      .map((res: Response) => res);
  }

}

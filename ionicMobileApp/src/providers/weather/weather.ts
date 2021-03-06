import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey = "8a40f4e6d4bd0231d4cfc35892e059da";
  url;

  constructor(public http: HttpClient) {
    this.url = "https://api.darksky.net/forecast/" + this.apiKey;
  }

  getWeather(latitude, longitude) {
    return this.http.get(this.url + "/" + latitude + "," + longitude)
      .map((res: Response) => res);
  }

}

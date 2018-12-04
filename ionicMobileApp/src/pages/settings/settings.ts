import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  latitude: string;
  longitude: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.storage.get('location').then((val) => {
      if (val != null) {
        let location = JSON.parse(val);
        this.latitude = location.latitude;
        this.longitude = location.latitude;
      } else {
        this.latitude = "37.8267";
        this.longitude = "-122.4233";
      }
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      latitude: this.latitude,
      longitude: this.longitude
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}

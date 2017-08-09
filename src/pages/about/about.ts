import { InfoPage } from './../info/info';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  showInfo(){
    this.modalCtrl.create(InfoPage).present();
  }

}

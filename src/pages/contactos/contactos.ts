import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
audio:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  //Method para volver a la pagina principal del juego
  goHome() {
    this.sonidoBoton();
    this.navCtrl.setRoot(HomePage);
  }
  sonidoBoton(){
    this.audio = new Audio();
    this.audio.src = '../assets/sounds/botones.mp3';
    this.audio.load();
    this.audio.play();
  }
}

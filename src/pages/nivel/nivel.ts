import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the NivelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nivel',
  templateUrl: 'nivel.html',
})
export class NivelPage {
  nombre: '';
  operacion: '';
  nivel: number;
  audio:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.userObject= this.navParams.data;
    this.nombre = navParams.get('nombre');
    this.operacion = navParams.get('operacion');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NivelPage');

  }

  //Metodos para cambiar el nivel de juego y pasar los parametros  a SegundaPage (nombre, oprecion escogida y nivel seleccionado)
  bntLevel1() {
    this.sonidoBoton();
    this.nivel = 1;
    this.navCtrl.push("SegundaPage", { nombre: this.nombre, operacion: this.operacion, nivel: this.nivel });
  }

  bntLevel2() {
    this.sonidoBoton();
    this.nivel = 2;
    this.navCtrl.push("SegundaPage", { nombre: this.nombre, operacion: this.operacion, nivel: this.nivel });
  }

  bntLevel3() {
    this.sonidoBoton();
    this.nivel = 3;
    this.navCtrl.push("SegundaPage", { nombre: this.nombre, operacion: this.operacion, nivel: this.nivel });
  }

  bntLevel4() {
    this.sonidoBoton();
    this.nivel = 4;
    this.navCtrl.push("SegundaPage", { nombre: this.nombre, operacion: this.operacion, nivel: this.nivel });
  }

  //Method para volver a la pagina principal del juego
  goHomeN() {
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

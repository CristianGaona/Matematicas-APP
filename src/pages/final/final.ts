import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {
  //Declaración de variables
  nombre: string;
  score: number;
  minutos: number;
  segundos: number;
  correcta: number;
  incorrecta: number;
  audio:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Aqui se extrae uno a uno los parametros obtenidos de SegundaPage
    this.nombre = navParams.get('nombre'); //Almacena el nombre del jugador
    this.score = navParams.get('score'); // Alamacena el puntaje del juego
    this.segundos = navParams.get('segundos'); // Almacena los segundos del juego
    this.correcta = navParams.get('correcta'); //Almacena el número de respuestas correctas
    this.incorrecta = navParams.get('incorrecta'); //Almacena el valor de respuestas incorrectas
    this.minutos = navParams.get("minutos"); //Almacena los minutos del juego
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalPage');
  }
  //Method para volver a la CategoriaPage, enviando como parametro el nombre del jugador 
  jugarOtra() {
    this.sonidoBoton();
    this.navCtrl.setRoot('CategoriaPage', { nombre: this.nombre });
  }
  goHomeF() {
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



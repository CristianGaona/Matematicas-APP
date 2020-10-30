import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  nombre = '';
  operacion: string;
  audio:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = navParams.get('nombre'); // aqui se recupera el parametro enviado desde la pagina HomePage (nombre del jugador)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  //Metodo para volver ala pagina principal
  goHomeC() {
    this.sonidoBoton();
    this.navCtrl.setRoot(HomePage);
  }

  //Métodos o funciones para el paso de parametros de una pagina a otra en este caso se pasa el nombre del jugador y el tipo de operacion
  // estos parametros son pasados a la pagina NivelPage
  bntSuma() {
    this.sonidoBoton();
    this.operacion = "suma";
    this.navCtrl.push("NivelPage", { nombre: this.nombre, operacion: this.operacion });
  }
  bntResta() {
    this.sonidoBoton();
    this.operacion = "resta";
    this.navCtrl.push("NivelPage", { nombre: this.nombre, operacion: this.operacion });
  }
  bntMultiplicacion() {
    this.sonidoBoton();
    this.operacion = "multiplicacion";
    this.navCtrl.push("NivelPage", { nombre: this.nombre, operacion: this.operacion });
  }
  bntMixta() {
    this.sonidoBoton();
    this.operacion = "mixta";
    this.navCtrl.push("NivelPage", { nombre: this.nombre, operacion: this.operacion });
  }

  sonidoBoton(){
    this.audio = new Audio();
    this.audio.src = '../assets/sounds/botones.mp3';
    this.audio.load();
    this.audio.play();
  }
}

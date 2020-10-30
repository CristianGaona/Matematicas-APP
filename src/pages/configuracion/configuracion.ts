import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { SegundaPage } from '../segunda/segunda';
//import { HomePage } from '../home/home';
/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {
 // chatRoot = HomePage;
 valor1 =0;
 //segundaPage = "prindaPage";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }
  bntOpcion1(){
   this.valor1=1;
    }

    nextPage1(){
    this.navCtrl.setRoot("SegundaPage");
    }

    nextPage(){
      this.valor1=1;
      this.navCtrl.setRoot("SegundaPage", {valor1:this.valor1});
      
    }
     
}


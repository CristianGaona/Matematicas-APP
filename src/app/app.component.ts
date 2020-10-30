import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { NavController,Nav} from 'ionic-angular';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{tittle: string, component: string}>;
 // rootPage ='ConfiguracionPage';
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
   //  {  tittle: 'Inicio' , component: 'HomePage'},
     // {  tittle: 'Juego' , component: 'SegundaPage'},
     // {  tittle: 'Configuración', component: 'ConfiguracionPage'},
      {  tittle: 'Contactos', component: 'ContactosPage' }
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page){
    this.nav.setRoot(page.component)
  }
}


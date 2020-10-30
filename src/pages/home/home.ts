// Importación de librerias, se importa la libreria unicamente a utilizar
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextToSpeech, TTSOptions } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  //Declaración de variables
  myForm: FormGroup;
  nombre: string;
  audio:any;

  // Constructor parametrizado
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private textToSpeech: TextToSpeech,
    private alertCtrl: AlertController) {

    // Estos métodos se ejecutan al iniciar la aplicación
    this.sayText();
    this.presentAlert();
    this.myForm = this.createMyForm(); // almacena el método para crear el formulario


  }
  //Metodo para presentar una alerta al inicio del juego
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Bienvenido al Juego', // titulo de la alerta
      message: '<img class="teacherimg" src="../assets/imgs/teacher.png"/><br>'+'No olvide ingresar su nombre para empezar con el juego', // texto de la alerta
      cssClass: 'inicioAlert',
      buttons: ['OK'] // botón de la alerta
      
    });
    
    alert.present(); //Visualización de la alerta en la pantalla principal
    this.sonidoBoton();
  }

  //Función para agregar TextToSpeech (permite que se lea un texto a voz)
  async sayText() {
    try {
      const options: TTSOptions = {
        text: "Escribe tu nombre para empezar el juego", //texto que emitira la aplicación
        rate: 1.3,// velocidad de la lectura de texto a Vox
        locale: 'es-Es'
      }
      await this.textToSpeech.speak(options);
    }
    catch (e) {
      console.error(e);
    }
  }

  //Metodo opcional para guardar el nombre del jugador y presentarlo por consola
  saveData1() {
    console.log(this.nombre);
  }

  //Metodo para crear un formulario y especificar que el campo es requerido
  private createMyForm() {
    return this.formBuilder.group({
      name: ['', Validators.required] //campo requerido

    });
  }

  //Metodo para pasar a la siguiente pagina, enviando el nombre ingresado al inicio
  nextPage() {
    this.sonidoBoton();
    this.navCtrl.setRoot("CategoriaPage", { nombre: this.nombre });

  }

  sonidoBoton(){
    this.audio = new Audio();
    this.audio.src = '../assets/sounds/botones.mp3';
    this.audio.load();
    this.audio.play();
  }
}


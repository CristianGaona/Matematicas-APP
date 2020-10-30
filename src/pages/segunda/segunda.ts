import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the SegundaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html',
})
export class SegundaPage {

  //Declaración de variables, para el lamcenamiento de sus respectivos valores
  minutos: number; // Almacena los minutos del juego
  segundos: number;// Alamcena los segundos del juego
  nombre = ''; // Almacena el nombre del jugador
  operacion: string = ''; //Alamcena el signo de la operacion matemática
  nivel: number; //Alamacena el nivel del juego
  bandera = false; //Cambia de estado cada vez que entra al metodo para comprobar el valor de los botones
  controlCorrecta = false; //Cambia de estado cuando selcciona un boton con la respuesta incorrecta
  controlIncorrecta = false;// Cambia de estado cuando selcceiona un boton con la respuesta correcta
  controlAsignación: number = 1; //Sirve como un contador para que los valores de los botones sean aleatorios
  score: number = 0; //Alamacena los puntos que obtiene el usuario
  intento: number = 5; // Numero de operaciones que se deben realizar
  num1: number; //Alamacena el primer valor aleatorio
  num2: number; //Alamacena el segundo valor aleatorio
  numSum: number; // Alamacena la respuesta segun la operación realizada entre los dos números
  signo: String; //Alamacena el valor del signo de operación a realizar
  bnt1: number; //Alamacena el valor aleatroio 
  bnt2: number;//Alamacena el valor aleatroio 
  bnt3: number;//Alamacena el valor aleatroio 
  bnt4: number;//Alamacena el valor aleatroio 
  correcta: number = 0; //Almacena el valor de las respuestas correctas 
  incorrecta: number = 0; //Almacena el valor de las respuestas incorrectas
  private audio: any;
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    //Se almacena los valores del jugador que ha pasado de ventana en ventana
    this.nombre = navParams.get('nombre'); 
    this.operacion = navParams.get('operacion');
    this.nivel = navParams.get('nivel');
    //Se almacena el valor aleatorio para las operaciones
    this.num1 = this.asignacionNivelnum();
    this.num2 = this.asignacionNivelnum();
    //Se reinicia el temporizador
    this.resetTimer();
    this.asignacionLevelBnt();
   setInterval(() => this.tick(), 1000);
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPage');
   
  }

  presentAlertCorrecta() {
    let alert = this.alertCtrl.create({
     title: 'Respuesta Correcta',
     message:this.respuestaCorrectsAleatoria()+'<br>'+ this.imagenesAleatorias()+'<br><br>'+'Acertaste '+this.num1.toString()+  this.signo +this.num2.toString() +' = '+ this.numSum.toString(),
     cssClass: 'alertaCorrecta',
     
     buttons: [
        {
          
          text: 'Siguiente',
         handler: data =>{
             this.reinicia1()
          }
        }
      ] // botón de la alerta
    });
    alert.present(); //Visualización de la alerta en la pantalla principal
    this.audio = new Audio();
    this.audio.src = '../assets/sounds/correcto.mp3';
    this.audio.load();
    this.audio.play();
  }

  presentAlertIncorrecta() {
    let alert = this.alertCtrl.create({
     title: 'Respuesta Incorrecta',
     message:this.respuestaIncorrectsAleatoria()+'<br>'+ this.imagenesAleatoriasI()+'<br>'+'La respuesta correcta de'+'<br>'+this.num1.toString()+ this.signo +this.num2.toString() +' es igual a '+ this.numSum.toString(),
     cssClass: 'alertaIncorrecta',
     
     buttons: [
        {
          
          text: 'Siguiente',
         handler: data =>{
             this.reinicia1()
          }
        }
      ] // botón de la alerta
    });
    alert.present(); //Visualización de la alerta en la pantalla principal
    this.audio = new Audio();
    this.audio.src = '../assets/sounds/incorrecto.mp3';
    this.audio.load();
    this.audio.play();
  }
  //Metodo para resetear el tiempo (opcional aun no esta implementado)
  resetTimer() {
    this.minutos = 0;
    this.segundos = 0;

  }

  //controlar el tiempo cuando segundos es igual a 59 vuel a cero y aumenta los minutos
  tick() {

    if (++this.segundos == 59) {
      this.minutos = this.minutos + 1;
      this.segundos = 0;
    }
  }


  //Comprobación de respuesta por cado boton que contenga la respeusta correcta, se asina puntaje caso contraio el puntaje permanece igual
  comprobarNumeroSumaBotones1() {
    this.sonidoBoton();
    if ((this.bnt1) == this.numSum) {
      this.controlCorrecta = true;
      this.score = this.score + 150;
      this.correcta = this.correcta + 1;
      this.presentAlertCorrecta();
    } else {
      this.presentAlertIncorrecta();
      this.controlIncorrecta = true;
      this.incorrecta++;
    }

    this.intentos();
    this.bandera = true;

  }

  //Comprobación de respuesta por cado boton que contenga la respeusta correcta, se asina puntaje caso contraio el puntaje permanece igual
  comprobarNumeroSumaBotones2() {
    this.sonidoBoton();
    if ((this.bnt2) == this.numSum) {
      this.controlCorrecta = true;
      this.score = this.score + 150;
      this.correcta = this.correcta + 1;
      this.presentAlertCorrecta();
      
      
    } else {
      this.presentAlertIncorrecta();
      this.controlIncorrecta = true;
      this.incorrecta++;
    }
    this.intentos();
    this.bandera = true;
  }
  //Comprobación de respuesta por cado boton que contenga la respeusta correcta, se asina puntaje caso contraio el puntaje permanece igual
  comprobarNumeroSumaBotones3() {
    this.sonidoBoton();
    if ((this.bnt3) == this.numSum) {
      this.controlCorrecta = true;
      this.score = this.score + 150;
      this.correcta = this.correcta + 1;
      this.presentAlertCorrecta();
    } else {
      this.presentAlertIncorrecta();
      this.controlIncorrecta = true;
      this.incorrecta++;
    }
    this.intentos();
    this.bandera = true;

  }
  //Comprobación de respuesta por cado boton que contenga la respeusta correcta, se asina puntaje caso contraio el puntaje permanece igual
  comprobarNumeroSumaBotones4() {
    this.sonidoBoton();
    if ((this.bnt4) == this.numSum) {
      this.controlCorrecta = true;
      this.score = this.score + 150;
      this.correcta = this.correcta + 1;
      
      this.presentAlertCorrecta();
    } else {
      this.presentAlertIncorrecta();
      this.controlIncorrecta = true;
      this.incorrecta++;
    }
    this.intentos();
    this.bandera = true;
  }

  //Generación de números aleatorios.
  numAleatorio(a: number, b: number) {
    return Math.round(Math.random() * (b - a) + (a));
  }

  //Segun el parametro obtenido de la pagina NivelPage, se asigana el valor aleatorio apara las distintas opreaciones
  //Ejemplo si eligio Fácil se obtendar un parametro con valor 1 ese parametro es comparado y se asina los valores correspondientes.
  asignacionNivelnum() {
    var result: number;
    if (this.nivel == 1) {
      result = this.numAleatorio(1, 10);
    } else if (this.nivel == 2) {
      result = this.numAleatorio(10, 20);
    } else if (this.nivel == 3) {
      result = this.numAleatorio(20, 40);
    } else if (this.nivel == 4) {
      result = this.numAleatorio(50, 99);
    }
    return result;
  }
  //Método para generar el opredor lógico de manera aleatoria.
  letrasSleatorias() {
    var aLetras = new Array('+', '-', 'x');
    var cLetra = aLetras[Math.floor(Math.random() * aLetras.length)];
    return cLetra;

  }

  respuestaCorrectsAleatoria(){
    var aLetras = new Array('Lo has hecho de maravilla', 'Muy bien, sigue adelante', 'Serás el próximo Albert Einstein', 'Fabuloso, sigue así', '¡Eres sorprendente!');
    var cLetra = aLetras[Math.floor(Math.random() * aLetras.length)];
    return cLetra;
  }

  respuestaIncorrectsAleatoria(){
    var aLetras = new Array('Has fallado esta vez', 'Te equivocaste', 'En el próximo intento lo harás mejor', 'Sigue intentando', 'Un error lo comente cualquiera');
    var cLetra = aLetras[Math.floor(Math.random() * aLetras.length)];
    return cLetra;
  }
  imagenesAleatorias(){
    var aLetras = new Array('<img class="imagenAcertada" src="../assets/imgs/aplausos.gif"/>', '<img class="imagenAcertada" src="../assets/imgs/menique.gif"/>','<img class="imagenAcertada" src="../assets/imgs/lenguagif.gif"/>','<img class="imagenAcertada" src="../assets/imgs/loco.gif"/>');
    var cLetra = aLetras[Math.floor(Math.random() * aLetras.length)];
    return cLetra;
  }
  imagenesAleatoriasI(){
    var aLetras = new Array('<img class="imagenAcertada" src="../assets/imgs/tenor.gif"/>', '<img class="imagenAcertada" src="../assets/imgs/tenor1.gif"/>','<img class="imagenAcertada" src="../assets/imgs/tenor2.gif"/>','<img class="imagenAcertada" src="../assets/imgs/tenor3.jpg"/>');
    var cLetra = aLetras[Math.floor(Math.random() * aLetras.length)];
    return cLetra;
  }
  
  // Si en dependencia de la categoria que el jugador seleccione se asigna las operaciones
  OperacionLogica(a, b) {
    var result: number;
    if (this.signo == "+") {
      result = (parseInt(a) + parseInt(b));
    } else if (this.signo == "-") {
      result = (parseInt(a) - parseInt(b));
    } else {
      result = (parseInt(a) * parseInt(b));
    }
    return result;
  }


  // Se compara la categoria que selecciono el jugador para asignarle el operador lógico
  operMath(a, b) {
    var result: number;
    if (this.operacion == "suma") {
      this.signo = "+";
      result = (parseInt(a) + parseInt(b));
    }
    else if (this.operacion == "resta") {
      this.signo = "-";
      result = (parseInt(a) - parseInt(b));
    }
    else if (this.operacion == "multiplicacion") {
      this.signo = "x";
      result = (parseInt(a) * parseInt(b));
    }
    // Este caso es especial, ya que se deben generar el operador lógico de manera aleatoria
    else if (this.operacion == "mixta") {
      this.signo = this.letrasSleatorias();
      result = this.OperacionLogica(this.num1, this.num2);
    }
    return result;
  }

  //Method para asiganar el nivel de juego segun el parametro obtenido.
  asignacionLevelBnt() {
    if (this.nivel == 1) {
      this.asignacionN1();
    } else if (this.nivel == 2) {
      this.asignacionN1();
    } else if (this.nivel == 3) {
      this.asignacionN1();
    } else if (this.nivel == 4) {
      this.asignacionN1();
    }
  }
  //Method para asiganar la respuesta correcta en cada uno de los botones empieza por el bnt1 y termina en bnt4 (segun el nivel seleccionado)
  asignacionN1() {
    
    this.numSum = this.operMath(this.num1, this.num2);
    if (this.controlAsignación == 1) {
      this.bnt1 = this.numSum;
      this.bnt2 = this.numSum + 1;
      this.bnt3 = this.numSum + 2;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 2) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum;
      this.bnt3 = this.numSum + 2;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 3) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum + 2;
      this.bnt3 = this.numSum;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 4) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum + 2;
      this.bnt3 = this.numSum - 1;
      this.bnt4 = this.numSum;
      this.controlAsignación = 1;
    }

  }
  //Method para asiganar la respuesta correcta en cada uno de los botones empieza por el bnt1 y termina en bnt4 (segun el nivel seleccionado)
  asignacionN2() {
    this.numSum = this.operMath(this.num1, this.num2);
    if (this.controlAsignación == 1) {
      this.bnt1 = this.numSum;
      this.bnt2 = this.numSum + 1;
      this.bnt3 = this.numSum + 2;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 2) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum;
      this.bnt3 = this.numSum + 2;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 3) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum + 2;
      this.bnt3 = this.numSum;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 4) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum + 2;
      this.bnt3 = this.numSum - 1;
      this.bnt4 = this.numSum;
      this.controlAsignación = 1;
    }

  }
  //Method para asiganar la respuesta correcta en cada uno de los botones empieza por el bnt1 y termina en bnt4 (segun el nivel seleccionado)
  asignacionN3() {
    this.numSum = this.operMath(this.num1, this.num2);
    if (this.controlAsignación == 1) {
      this.bnt1 = this.numSum;
      this.bnt2 = this.numSum + 1;
      this.bnt3 = this.numSum + 2;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 2) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum;
      this.bnt3 = this.numSum + 2;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 3) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum + 2;
      this.bnt3 = this.numSum;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 4) {
      this.bnt1 = this.numSum + 1;
      this.bnt2 = this.numSum + 2;
      this.bnt3 = this.numSum - 1;
      this.bnt4 = this.numSum;
      this.controlAsignación = 1;
    }

  }
  //Method para asiganar la respuesta correcta en cada uno de los botones empieza por el bnt1 y termina en bnt4 (segun el nivel seleccionado)
  asignacionN4() {
    this.numSum = this.operMath(this.num1, this.num2);
    if (this.controlAsignación == 1) {
      this.bnt1 = this.numSum; //Respuesta correcta
      this.bnt2 = this.numSum - 2;
      this.bnt3 = this.numSum + 1;
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 2) {
      this.bnt1 = this.numSum + 2;
      this.bnt2 = this.numSum; //Respuesta correcta
      this.bnt3 = this.numSum - 1;
      this.bnt4 = this.numSum + 3;
      this.controlAsignación++
    } else if (this.controlAsignación == 3) {
      this.bnt1 = this.numSum - 2;
      this.bnt2 = this.numSum + 3;
      this.bnt3 = this.numSum; //Respuesta correcta
      this.bnt4 = this.numSum - 1;
      this.controlAsignación++
    } else if (this.controlAsignación == 4) {
      this.bnt1 = this.numSum - 1;
      this.bnt2 = this.numSum + 2;
      this.bnt3 = this.numSum + 3;
      this.bnt4 = this.numSum; //Respuesta correcta
      this.controlAsignación = 1;
    }

  }
  //Method para controlar los intentos del juego
  intentos() {
    if (this.intento == 0) {
      console.log("fin del juego");
    } else {
      this.intento--;
    }
  }
  //Reinicio de variables a su estado original, cada vez que presionamos el btoón siguiente
  reinicia1() {
    this.sonidoBoton();
    this.num1 = this.asignacionNivelnum();
    this.num2 = this.asignacionNivelnum();
    this.bandera = false;
    this.controlCorrecta = false;
    this.controlIncorrecta = false;
    this.asignacionLevelBnt();
  }

  //Método para enviar los parametros obtenidos en SegundaPage hacia FinalPage
  finalizar() {
    this.sonidoBoton();
    this.navCtrl.setRoot("FinalPage", { nombre: this.nombre, score: this.score, segundos: this.segundos, minutos: this.minutos, correcta: this.correcta, incorrecta: this.incorrecta });
  }

  goHomeS() {
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



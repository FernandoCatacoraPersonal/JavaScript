import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador',
  templateUrl: './saludador.html',
  styleUrl: './saludador.css'
})
export class Saludador {
  mensaje:String ='';

  saludar(){
    this.mensaje="hola mundo";
  }
}

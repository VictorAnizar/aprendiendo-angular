import { Component } from '@angular/core';
import { Config } from './models/config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public mostrar_videojuegos: boolean=true;
  public descripcion: string;

  constructor(){
    this.title=Config.titulo;
    this.descripcion=Config.descripcion;
  }

  ocultarVideojuego(value: boolean){
    this.mostrar_videojuegos=value;
  }
}

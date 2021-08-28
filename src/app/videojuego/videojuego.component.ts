//onInit, on destroy, son eventos que se van a ejecutar dependiendo del estado del componente, estan estrechamente relacionados con su ciclo de vida
import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { noop } from "rxjs";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    //propiedades
    public titulo: string;
    public listado: string;
    public calif: number;
    //el comstructor se ejecuta antes del OnInit
    constructor(){
        this.titulo="componente de videojuegos";
        this.listado="Listado de los juegos";
        this.calif=5;
        // console.log("se ha cargado el componente videojuego.component.ts");
        
    }
    //se ejecuta este metodo apenas se cargue el componente
    ngOnInit(){
        // console.log("oninit ejecutado");   
    }
    //se ejecuta cada que se haga un cambio ne el componente o app angular
    ngDoCheck(){
        // console.log("DO check ejecutado");
    }
    //sirve para que se ejecute algo antes de eliminar la instancia de un componente
    ngOnDestroy(){
        // console.log("On destroy ejecutado");
        
    }
    cambiaTitulo(){
        this.titulo="Nuevo titulo";
    }
    aumentaCalif(){
        this.calif++;
    }
    reduceCalif(){
        this.calif--;
    }
}
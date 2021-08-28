import { Component, OnInit } from "@angular/core";
import { Zapato } from "../models/zapato";

@Component({
    selector: "zapatos",
    templateUrl: './zapatos.component.html'
})
export class ZapatoComponent implements OnInit {
    //asignar un valor aqui no es la mejor practica
    public titulo: string = "componente de zapatos"
    public zapatos: Array<Zapato>;
    public marcas: String[];
    public color: string;
    public miMarca: string;
    constructor() {
        this.miMarca="fila"
        this.color='rojo';
        this.marcas = new Array;
        this.zapatos = [
            new Zapato('adidas90', 'adidas', 'rojo', 70, true),
            new Zapato('nike2', 'nike', 'azul', 120, true),
            new Zapato('nike233', 'nike', 'azul', 120, false)
        ];
    }
    ngOnInit() {
        console.log(this.zapatos);
        this.getMarcas();
    }
    getMarcas() {
        this.zapatos.forEach((value, index) => {
            if(this.marcas.indexOf(value.marca)<0){
                this.marcas.push(value.marca);
            }
            console.log(index);
        });
        console.log(this.marcas);

    }
    getMiMarca(){
        alert(this.miMarca);
    }
    setMarca(value: string){
        this.marcas.push(value);
    }
    setColor(value: string){
        this.color=value; 
    }
    borrarMarca(indice: number){
        this.marcas.splice(indice, 1);
    }
    onBlur(){
        console.log("has salido del input, mostrando componente");
        console.log(this);
        
    }
    mostrarPalabra(){
        alert(this.miMarca);
        
    }
}
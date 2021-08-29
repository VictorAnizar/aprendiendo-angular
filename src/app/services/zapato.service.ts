import { Injectable } from "@angular/core";
import { Zapato } from "../models/zapato";

@Injectable()
export class ZapatoService{
    public zapatos: Array<Zapato>;
    constructor(){
        this.zapatos = [
            new Zapato('adidas90', 'adidas', 'rojo', 70, true),
            new Zapato('nike2', 'nike', 'azul', 120, true),
            new Zapato('nike233', 'nike', 'azul', 120, false)
        ];
    }
    getTexto(){
        return "Hola zapato desde servicio";
    }
    getZapatos(): Array<Zapato>{
        return this.zapatos;
    }
}
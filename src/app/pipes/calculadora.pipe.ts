import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    //es obligatorio este metodo si se usa pipetransform
    // dato | calculadora: otroDato
    // param1   | param 2
    transform(value: any, value2: any){
        let operaciones =  `
        Suma: ${value+value2} <br>
        Resta: ${value-value2}<br>
        Multiplicacion: ${value*value2}<br>
        Division:${value/value2}<br>
        `
        return operaciones;
    }
}
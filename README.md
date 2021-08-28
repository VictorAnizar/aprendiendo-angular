# AprendiendoAngular

## Componentes
Un componente puede ser desde cualquier elemento de la página (el navbar, un formulario, un boton) hasta la página en Sí
Está compuesto por una plantilla (archivo html que será lo visual), un archivo ts que tendrá la declaracion de la clase del componente y su respectiva configuracion y logica y un archivo css para la parte de estilos del componente

## Directivas estructurales (ngIf, ngFor)
Estas directivas cumplen el trabajo de las estructuras de control convencionales (condicional if, ciclo for, condicionales switch)
Y se usan principalmente en los archivos .html de un cierto componente de la aplicacion angular

### Ejemplos de uso
#### ngFor
Supongamos que se tiene un componente de zapatos y en el archivo zapatos.componponent.ts existe un atributo "zapatos" el cual contendra los mismos
Para iterar sobre este arreglo en el archivo html se usa: 
`*ngFor="let e of zapatos"` 
como atributo de la etiqueta, es decir, vemos que la aparicion de "zapatos" en el archivo html, debe existir como atributo en el archivo ts. Para accede a cada elemento se usa el iterador y los simbolos {{}}

#### ngIf
Para usar esta directiva se tiene que agregar 
`*ngIf="condicion"`

## Evento click y onBlur
Para poder agregar un evento onClick en algun elemento, se tiene que agregar como atributo lo siguiente.
`(click)="funcion()"`

En el caso de la función onBlur:
`(blur)="funcion()"`

"funcion()" es el comportamiento que tendrá el elemento al ejecutarse dicho evento

Existen más eventos que se implementan de la misma forma, (p. ej. el evento keyup)

## Directiva ngClass
Esta directiva básicamente sirve para agregar una clase CSS a una etiqueta/elemento si se cumple una condicion dada
`[ngClass] = "{'fondoRojo': e.precio>120, 'subrayado': e.marca=='nike'}"`
Lo anterior es el atributo que se puede agregar a la etiqueta

## Routing
1. Para que se pueda tener un componente por "página" en la app angular es importante que en el html, esté la etiqueta: `<base href="/">` en el head

2. Se crea un archivo app-routing dentro de él va a estar toda la configuracion de rutas de la app.
    - Se importan los modulos del ruter de angular
    - Se importan los componentes
    - Se hace un array de configuracion de rutas (Array de JSON's, éstos van a tener la estructura {path: '', component: componente})
    - Se exporta el módulo de rutas

3. Se importa el archivo en app.module.ts 

4. Se agrega la etiqueta del sistema de rutas en app.component.html `<router-outlet></router-outlet>`. Esta etiqueta se va a encargar de cargar la ruta que se esta mandando por url de forma dinamica, esta ruta debe de estar definida en el arreglo anteriormente mencionado


## Readme default

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

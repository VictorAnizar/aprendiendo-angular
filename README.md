# AprendiendoAngular

## Generando un proyecto

Para generar un proyecto de angular nuevo basta con escribir el comando `ng new nombreProyecto`. Ejecurar esto hará que estén listos todos los archivos para desarrollo

### Preparando un archivo para producción
Para que un proyecto de Anglar deje de estar en desarrollo y pase a producción, es necesario ejecutar el comando `ng build --prod`.
Lo anterior generará una carpeta `dist/` la cual contendrá los archivos listos para desplegarse a producción.

## String interpolation
Este concepto es util para que ejecutemos sentencias sencillas dentro de nuestro archivo html de nuestro componente, para ello, basta con escribir
`{{miSentencia}}`

### Enlace útil
<https://gustavodohara.com/blogangular/banana-in-box-banana-la-caja/>

## Pipes

Un pipe es un pequeño trozo de códiogo que nos permite agregar una pequela funcionalidad en nuestras vistas
Existen Pipes para fechas, transformar caracteres, entre muchas más

- Pipes para fechas
- Pipes para textos

Tambien nosotros podemos crear nuestros pipes, para esto lo ideal es crear una carpeta de pipes, dentro de ella creamos los pipes que queramos. Cada archivo debe importar las clases Pipe: `import { Pipe, PipeTransform } from "@angular/core";`
Así mismo, debemos de agregar un decorador a la clase, en éste puede estar el nombre del pipe como tal.
Posterior a esto, se debe implementar en la clase, la clase PipeTransform. Al implementar la anterior, se debe definir el método `transform()`, en donde el primer parámetro que recibe es la entrada del pipe y el segundo parametro que recibe es la salida del pipe:
`entrada | nombrePipe: salida`

Para generar un pipe propio se usa ``ng generate p nombrePipe`

Los Pipes tienen muy buen rendimiento, por lo que puede ser mejor, en algunos casos, usarlos en vez de las funciones

## Componentes
Un componente puede ser desde cualquier elemento de la página (el navbar, un formulario, un boton) hasta la página en Sí
Está compuesto por una plantilla (archivo html que será lo visual), un archivo ts que tendrá la declaracion de la clase del componente y su respectiva configuracion y logica y un archivo css para la parte de estilos del componente

Para generar un componente, se usa `ng generate component nombreComponent`

### Enviar datos a un componente
El `Property binding` y `Event binding` nos permiten enviar y recibir datos de un componente.
Para que nuestro componente pueda recibir información, se le debe importar la clase `Input`. Esto es para que se pueda agregar el decorador `@input` a una determinada variable.
`@Input() product: Product;`
Para que nuestro componente pueda recibir informacion, es necesario que en la llamada de su etiqueta, se agregue un atributo con el nombre de la variable con el decorador. 
En cuanto a la salida de datos del componente, podemos decir que ya se ha usado con los eventos (click). Sin embargo también se debe de agregar la respectiva clase `Output`
`@Output() productClicked: EventEmitter<any> = new EventEmitter();`

### Ciclo de vida de los componentes
Todo componente tiene una serie de "steps" que determinan parte de su ciclo de vida, estos "steps" o proceso tienen el siguiente orden

#### 1. Constructor
Se usa para cargar el componente y ponerlo en la interfaz
#### 2. ngOnChanges
Detecta cambios cada vez que se tiene un input
#### 3. ngOninit
Se ejecuta una sola vez cuando el componente ya esta listo en pantalla. Es ideal para hacer llamadas a API's
#### 4. ngDoCheck
Detecta cuándo los elementos hijos del componente son puestos en la interfaz. <strong>Este metodo no puede estar junto con ngOnChanges debido a que los dos están dedicados a detectar cambios. Se coloca uno u otro</strong>
#### 5. ngOnDestroy 
Detecta cuando el componente es eliminado de la interfaz



## Directivas estructurales (ngIf, ngFor)
Estas directivas cumplen el trabajo de las estructuras de control convencionales (condicional if, ciclo for, condicionales switch)
Y se usan principalmente en los archivos .html de un cierto componente de la aplicacion angular

### Ejemplos de uso
#### ngFor
Supongamos que se tiene un componente de zapatos y en el archivo zapatos.componponent.ts existe un atributo "zapatos" el cual contendra los mismos
Para iterar sobre este arreglo en el archivo html se usa: 
`*ngFor="let e of zapatos"` 
como atributo de la etiqueta, es decir, vemos que la aparicion de "zapatos" en el archivo html, debe existir como atributo en el archivo ts. Para accede a cada elemento se usa el iterador y los simbolos {{}}
<strong>LOS OBJETOS NO SON ITERABLES</strong>


#### ngIf
Para usar esta directiva se tiene que agregar 
`*ngIf="condicion"`

#### ngSwitch
Se usa para ejecutar una condicion dependiendo de la condicioon, es para ahorrarse muchas lineas de código que involucran al if.
Para ello, solo debemos escribir en una etiqueta: `[ngSwitch]="variableVerificadora"` y dentro de ésta, crear nuevas etiquetas con las posibles entradas para la variableVerificadora, tal que así: `*ngSwitchCase="caso"`. En caso de que no haya coincidencia, se puede usar el default: `*ngSwitchDefault`

Si quisieramos agregar un else, se puede usar la etiqueta ng-template, la cual contendrá la vista que queremos que se muestre en un else. Esta etiqueta tiene como atributo un identificador. En otras palabras, el contenido de la sentencia "else" tiene un identificador.
Es importante mencionar que para que se use lo anterior, se debe colocar un ";" despues de ' *ngIf="condicion" ', seguido de la palabra "else" y seguido del identificador

### Directiva ngClass
Esta directiva básicamente sirve para agregar una clase CSS a una etiqueta/elemento si se cumple una condicion dada
`[ngClass] = "{'fondoRojo': e.precio>120, 'subrayado': e.marca=='nike'}"`
Lo anterior es el atributo que se puede agregar a la etiqueta

### Directivas propias
Tambien podemos crear nuestras propias directivas para que se puedan usar en algun elemento html
Para ello, se debe ejecutar `ng g d nombreDirectiva`.
Para que se pueda usar en algun elemento html, se debe importar la clase `ElementRef` y hacer una inyección de dependencias en el constructor (en la parte de los parámetros declarar un elemento de clase importada), En el cuerpo del constructor se debe usar el elemento creado con esta inyección

## Evento click y onBlur
Para poder agregar un evento onClick en algun elemento, se tiene que agregar como atributo lo siguiente.
`(click)="funcion()"`

En el caso de la función onBlur:
`(blur)="funcion()"`

"funcion()" es el comportamiento que tendrá el elemento al ejecutarse dicho evento

Existen más eventos que se implementan de la misma forma, (p. ej. el evento keyup)


## Modulos y Rutas

Una buena Práctica es crear componentes para cada página del sitio, sin embargo es una mucho mejor práctica si ése componente "página" se modulariza con la ayuda de Lazy Load

Por ejemplo, si se quisiera abstraer completamente la página "home", tendría que crearse dentro de `src/app/components/home` una serie de carpetas y archivos para que el componente "home" realmente se modularice. Dentro de él habría una carpeta `components/`, `directives/`, etc que únicamente "home" utilice, en cuanto a los archivos, se tiene que crear uno para rutas (`home-routing.module.ts`) y uno para el módulo "home" en Sí (`home.module.ys`). El modulo de home para las rutas tendría lo siguiente 
```javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule{

}
```
Sin embargo, en el archivo del módulo del home,, tenemos que importar todo lo que el componente usa (Componentes, Pipes, directivas e, incluso, el componente home en sí):
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [    HomeComponent, BannerComponent  ],
  imports: [
    HomeRoutingModule,CommonModule 
  ]
})
export class HomeModule { }

```

Esto, es en cuanto a la configuracion de archivos y directorios del ahora módulo (antes componente) "home". Sin embargo, también se tienen que modificar algunos archivos que estaba utilizando a "home" como componente. 
El archivo `app.module.ts` sufrió la modificación de que se le tiene que eliminar en sus declaraciones e importaciones al, antes componente, "home"
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { SumaPipePipe } from './pipes/suma/suma-pipe.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
// import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//import { BannerComponent } from './components/banner/banner.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ServicioCardComponent } from './components/servicioCard/servicio-card/servicio-card.component';
import { ServiciosCardsComponent } from './components/serviciosCards/servicios-cards/servicios-cards.component';
import { ServicioDetailComponent } from './components/servicio-detail/servicio-detail/servicio-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    SumaPipePipe,
    HighlightDirective,
    // HomeComponent,
    ProductsComponent,
    ContactComponent,
    PruebasComponent,
    HeaderComponent,
    FooterComponent,
    //BannerComponent,
    PaginaNoEncontradaComponent,
    ProductDetailComponent,
    ServicioCardComponent,
    ServiciosCardsComponent,
    ServicioDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
El otro archivo a modificar para que todo funcione correctamente es `app-routing.module.ts`. En él, lo que se modifica es el arreglo de objetos de rutas, debido a que éstos objetos "invocan" a componentes como tal, Se modificar de tal forma que esta vez se invoque a un módulo como tal, quedando de la sig. forma:
```javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ServiciosCardsComponent } from './components/serviciosCards/servicios-cards/servicios-cards.component';
import { ServicioDetailComponent } from './components/servicio-detail/servicio-detail/servicio-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent , children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      { 
        path: 'home', 
        // component: HomeComponent 
        loadChildren: () => import('./components/home/home.module').then(m=>m.HomeModule)
      },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'servicios', component: ServiciosCardsComponent },
      { path: 'servicios/:id', component: ServicioDetailComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'pruebas', component: PruebasComponent },
      { path: '**', component: PaginaNoEncontradaComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```
En resumen, se crea un módulo para cáda página del sitio. Dentro de éste modulo, se declaran los componentes, pipes, etc que EL MISMO MODULO USARÁ, Es importante mencionar que se tiene que crear un componente del módulo en sí, en la carpeta de componentes del módulo.
Las rutas de `app-routing.module.ts` llaman al modulo home y el modulo home invoca a los componentes que usará 

Los modulos y rutas sirven para abstraer y dividir mejor por dominio nuestra aplicación.
En Angular tenemos 2 modulos especiales: `Core` y `Shered`, el primero sirve para guardar todos los servicios o componentes que se van a usar en todos los otros modulos, es decir, se genera una sola referencia de él, peculiarmente aquí se puede tener un servicio de autentificacion ya que en una aplicacion real, solo debe existir un servicio que maneje la autentificacion de los usuarios. En cuanto al modulo shered, aquí se pueden tener componentes y servicios compartidos, por ejemplo un componente que es utilizado por distintos modulos.

## Routing
1. Para que se pueda tener un componente por "página" en la app angular es importante que en el html, esté la etiqueta: `<base href="/">` en el head

2. Se crea un archivo app-routing dentro de él va a estar toda la configuracion de rutas de la app.
    1. Se importan los modulos del ruter de angular
    2. Se importan los componentes
    3. Se hace un array de configuracion de rutas (Array de JSON's, éstos van a tener la estructura {path: '', component: componente})
    4. Se exporta el módulo de rutas

3. Se importa el archivo en app.module.ts 

4. Se agrega la etiqueta del sistema de rutas en app.component.html `<router-outlet></router-outlet>`. Esta etiqueta se va a encargar de cargar la ruta que se esta mandando por url de forma dinamica, esta ruta debe de estar definida en el arreglo anteriormente mencionado


Si se quisiera crea un menu de navecaion en la app, se puede crear una etiqueta nav antes de la etiqueta "router-outlet" y se tiene que usar la directiva `[routerLink]`
El resultado sería
`<nav>
  <a [routerLink]="['/']" [routerLinkActive]="[active]">Home</a>
  &nbsp;
  <a [routerLink]="['/zapatos']">Zapatos</a>
  &nbsp;
  <a [routerLink]="['/videojuego']">Videojuego</a>
  &nbsp;
  <a [routerLink]="['/curso']">curso</a>
</nav> 
`
La directiva ` [routerLinkActive]="[active]" ` sirve para que se le aplique la clase "active" al elemento `<a>`

Si quisieramos que en la URL existan "subrutas" de algun componente, se tiene que agregar una ruta en el arreglo de rutas del punto 2.4.
`{path: 'curso/:nombre', component: CursoComponent},` sería una "subruta para el componente curso". Además en el componente involucrado, se tiene que hacer ciertas configuraciones:

1. Importar las clases necesarias `import { Router } from '@angular/router';
 import { ActivatedRoute } from '@angular/router';
  import { Params } from '@angular/router';`
2. Usar las respectivas clases en el constructor


## Servicios

Los servicios son clases cuyo objetivo principal es abstraer la logica princiapl de la app. Éstas clases nos proveen de distintos métodos para hacer peticiones a un servidor (p. ej.).
Los servicios se encargan de proveer info a un determinado componente.
Para empezar a crearlos, se puede empezar por la creacion de la carpeta `/services` dentro de `/app`. Un servicio puede ser `zapato.service.ts`:
1. Se debe importar la clase Injectable y la clase del componente en cuestion
2. Se agrega el decorador `@injectable` seguido de la declaracion de la clase. Es importante agregar la palabra reservada `export` para poder incluir el servicio en el componente.
3. Se importa el servicio creado en el componente en cuestion:
  1. Se importa el servicio con la palabra reservada `import`
  2. Se agrega la key "providers" en el decorador "Component" antes de la declaracion de la clase del componente
  3. Se crea un atributo del tipo del servicio creado en la parte de los argumentos del constructor para evitarse crear mucho codigo
  4. Se usa el servicio como tal.

## Peticiones AJAX a un servicio externo

Para consumir un servicio externo, es muy similar a consumir un servicio "local". La diferencia aqui es que se tiene que importar la clase `HttpClient, HttpHeaders` y `Observable`.
Se siguien los puntos 1, 2 y 3 de "Servicios"
Se crea un atributo que contrndrá la URL principal del servicio exterior, por ejemplo: `https://reqres.in`, a partir de esta URL se pueden ir agregando las "subrutas" para que se consulte determinada informacion. Por ejemplo si se quisiera obtener todos los usuarios de la API, se deberia de crear una funcion que devuelva los usuarios:
<kbd>getUsers(): Observable<any>{
        return this._http.get(this.url+"/api/users?page=2");
}</kbd>


## Formularios de contacto

Si se desea crear un formulario de contacto, lo primero que se puede hacer es crear el "esqueleto" en la vista del html, posterio a esto, se debe nombrar el formluario de contacto, es decir, se debe de implementar una estructura parecida a esta en los atributos de la etiqueta form:
`#contacto="ngForm"`, así mismo, se puede agregar un evento `(ngSubmit)="funccion"` para que se ejecute algo despues de darle click al boton de enviar.

En el caso específico de los formularios de contacto, es recomendable crear un modelo para contaco, por ejemplo, se puede crear un modelo llamado "contactoUsuario". En el archivo de este modelo, unicamente va a contener la estructura gral de la clase usuario: respectivos atributos y métodos.
En el componente de contacto como tal, es importante importar el modelo anterior, se puede crear en este componente, un atributo que sea del tipo del modelo y en el constructor del componente, inicializar este atributo.

Volviendo a la vista del componente, cada input se debe relacionar con cada atributo del componente como tal. Esto se logra con la directiva `[(ngModel)="atributo"]`. Esto, con el objetivo de que cuando se de click al boton de enviar, se pueda tener acceso al objeto contactoUsuario declarado en el componente como tal.

## Lazy load
Es una técnicq profesiona el angular que sirve para reducir el peso de las aplicaciones para hacer que carguen más rápido. Se basa en fragmentar ciertos archivos JS para que estos pequeños fragmentos se carguen solo cuando sea necesario. 
Para usar ésta técnica es necesario modularizar nuestro proyecto.
Los componentes que funcionan como páginas como tal, se pueden dividir en módulos (generar archivos .module.ts y agregar respectivas importaciones de clases). dentro de la carpeta del componente que actúa como página (p. ej. componente home), se debe crear una carpeta components en donde estarán los componentes que usa el componente home

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

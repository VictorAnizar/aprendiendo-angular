import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//importamos el modulo de rutas
import { routing, appRoutingProviders } from './app.routing';
//importamos el httpclient module
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatoComponent } from './zapatos/zapatos.component';
import { CounterComponent } from './counter/counter.component';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CounterComponent, 
    ZapatoComponent, CursoComponent, HomeComponent, ExternoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    routing, 
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

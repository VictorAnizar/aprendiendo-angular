// Cramos este archivo para toda la config de rutas de la app angular

//1. importamos los modulos del router
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//2. importamos los componentes
import { HomeComponent } from "./home/home.component";
import { ZapatoComponent } from "./zapatos/zapatos.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursoComponent } from "./curso/curso.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { Route } from "@angular/compiler/src/core";

//3. Array de config de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatos', component: ZapatoComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'curso', component: CursoComponent},
    {path: 'curso/:nombre', component: CursoComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: HomeComponent}
];

//4. exportar el modulo de router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
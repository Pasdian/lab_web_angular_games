import { RouterModule, Routes } from '@angular/router';

//Se tienen que importar todas las rutas que vamos a utilizar
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { InfoconsolaComponent } from './componentes/infoconsola/infoconsola.component';
import { JuegosconsolaComponent } from './componentes/juegosconsola/juegosconsola.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { ResconsolasComponent } from './componentes/buscador/resconsolas/resconsolas.component';
import { ResjuegosComponent } from './componentes/buscador/resjuegos/resjuegos.component';
import { BlogComponent } from './componentes/blog/blog.component';



const APP_ROUTES: Routes = [
  //Se inicializan todas las rutas que vamos a utilizar.
  { path: 'principal', component: PrincipalComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'consolas', component: ConsolasComponent },
  // { path: 'consolas/infoconsola', component: InfoconsolaComponent },
  { path: 'infoconsola/:id', component: InfoconsolaComponent },
  {
    path: 'juegosconsola',
    component: JuegosconsolaComponent,
  },
  {
    path: 'juego/:id',
    component: JuegoComponent,
  },
  { path: 'resconsolas/:palabrasBusqueda', component: ResconsolasComponent },
  { path: 'resjuegos/:palabrasBusqueda',component: ResjuegosComponent},
  { path: 'blog', component: BlogComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'principal' },
];

//Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
//y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

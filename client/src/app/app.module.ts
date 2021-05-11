import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/comunes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { APP_ROUTING } from './app.routes';
import { InfoconsolaComponent } from './componentes/infoconsola/infoconsola.component';
import { JuegosconsolaComponent } from './componentes/juegosconsola/juegosconsola.component';
import { JuegoComponent } from './componentes/juego/juego.component';

import { ConsolasService } from './servicios/consolas.service';
import { ResconsolasComponent } from './componentes/buscador/resconsolas/resconsolas.component';
import { ResjuegosComponent } from './componentes/buscador/resjuegos/resjuegos.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { AdministracionComponent } from './componentes/administracion/administracion.component';
import { FormConsolaComponent } from './componentes/administracion/form-consola/form-consola.component';
import { FormJuegoComponent } from './componentes/administracion/form-juego/form-juego.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './servicios/games.service';
import { BlogService } from './servicios/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    AcercadeComponent,
    ConsolasComponent,
    InfoconsolaComponent,
    JuegosconsolaComponent,
    JuegoComponent,
    ResconsolasComponent,
    ResjuegosComponent,
    BlogComponent,
    AdministracionComponent,
    FormConsolaComponent,
    FormJuegoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ConsolasService,
    GamesService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

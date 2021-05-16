import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

import { EncabezadoComponent } from './componentes/comunes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { InfoconsolaComponent } from './componentes/infoconsola/infoconsola.component';
import { JuegosconsolaComponent } from './componentes/juegosconsola/juegosconsola.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { ResconsolasComponent } from './componentes/buscador/resconsolas/resconsolas.component';
import { ResjuegosComponent } from './componentes/buscador/resjuegos/resjuegos.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { AdministracionComponent } from './componentes/administracion/administracion.component';
import { FormConsolaComponent } from './componentes/administracion/form-consola/form-consola.component';
import { FormJuegoComponent } from './componentes/administracion/form-juego/form-juego.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { MensajeComponent } from './componentes/chat/mensaje/mensaje.component';
import { MensajeschatComponent } from './componentes/chat/mensajeschat/mensajeschat.component';

import { ConsolasService } from './servicios/consolas.service';
import { GamesService } from './servicios/games.service';
import { BlogService } from './servicios/blog.service';
import { ChatService } from './servicios/chat.service';


const config: SocketIoConfig = { url: 'http://localhost:8585', options: {} };

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
    FormJuegoComponent,
    ChatComponent,
    MensajeComponent,
    MensajeschatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    APP_ROUTING
  ],
  providers: [
    ConsolasService,
    GamesService,
    BlogService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

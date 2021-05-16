import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  mensajes = this.socket.fromEvent<string[]>('chat');

  constructor(private socket: Socket) { }


  // TODO if theres data type issues, try with string, else just leave any as datatype
  writeChat(message: String) {
    console.log('Enviando mensaje: ' + message);
      this.socket.emit('writeChat', message);
  }

  //Esto es comunicación del cliente hacia el servidor, utilizando el evento readChat
  // hace una emision al evento readChat
  // cliente esta emitiendo al evento de readChat
  readChat() {
    this.socket.emit('readChat');
  }
}


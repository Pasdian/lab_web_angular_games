import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ChatService } from '../../../servicios/chat.service';

@Component({
  selector: 'app-mensajeschat',
  templateUrl: './mensajeschat.component.html',
  styleUrls: ['./mensajeschat.component.css']
})
export class MensajeschatComponent implements OnInit, OnDestroy {

  // arreglo local de mensajes del chat
  estadoChat: string[];

  // variable de instancia para suscribirse al obsjervable
  private chatSub: Subscription;

  constructor(private chatService: ChatService) {}
  ngOnInit() {

    this.chatSub = this.chatService.mensajes.subscribe(chat => this.estadoChat = chat)
    this.chatService.readChat();
  }
  ngOnDestroy() {
    // libera recursos cuando se destruya el componente
    this.chatSub.unsubscribe();
  }

}

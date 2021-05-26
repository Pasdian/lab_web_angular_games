import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../../servicios/chat.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  userId = sessionStorage.getItem("userID")

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  sendMessage(message: String) {
    message = `[${this.userId}]: ${message}`;
    this.chatService.writeChat(message);
  }

}

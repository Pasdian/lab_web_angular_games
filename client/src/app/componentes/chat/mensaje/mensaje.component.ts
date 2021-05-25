import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../../servicios/chat.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  // TODO cambiar por el id del usuario en la DB
  userId = sessionStorage.getItem("userID")

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  // TODO if theres data type issues, try with string, else just leave any as datatype
  sendMessage(message: String) {
    message = `[${this.userId}]: ${message}`;
    this.chatService.writeChat(message);
  }

}

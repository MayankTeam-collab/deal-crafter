import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bot-body',
  standalone: true,
  imports: [NgFor],
  templateUrl: './chat-bot-body.component.html',
  styleUrl: './chat-bot-body.component.scss'
})
export class ChatBotBodyComponent{
  @Input() messages: any;
}

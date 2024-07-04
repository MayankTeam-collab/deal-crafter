import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChatBotService } from '../../services/chat-bot.service';

import { ChatBotBodyComponent } from './chat-bot-body/chat-bot-body.component';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [ChatBotBodyComponent, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  messageJSON: any = [
    {
      body: "Hello! How can I help you today?",
      classes: "message bot-message",
    },
  ];

  constructor(private cbServive: ChatBotService) {}

  /**
   * Life cycle Hook 
   * states the initialization of the component
   */
  ngOnInit(): void {
    this.cbServive.getData().subscribe(data => {
      console.log(data);
    });
  }

  /**
   * send message is used to take the user input
   * Inside the event, we take the event.value as the text input
   * and try to frame an API call based upon the same
   */
  sendMessage(event: any) {
    if (event.value.trim() !== "") {
      this.messageJSON.push({
        body: event.value,
        classes: 'message user-message',
      });
      // Clear the input field
      event.value = ""; 
    }
  }

}

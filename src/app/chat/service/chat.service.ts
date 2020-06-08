import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  newReply: Subject<string> = new Subject();

  messages: Message[] = [
    {
      message: 'who is aaa',
      user: 'user',
      responses: [],
      timestamp: new Date()
    }, 
    {
      message: 'where is bbb',
      user: 'user',
      responses: [ 'in nebraska' ],
      timestamp: new Date()
    }, 
    /*{
      message: 'who is in australia',
      user: 'user',
      responses: [ 'blake was last seen bein a dumb idiot at  lololo xd he thinks hes funny lololol whatt dummy', 'hayden is really cool btw dddddddd what time is it i need to poop', 'blake', 'hayden','blake was last seen bein a dumb idiot lololo xd he thinks hes funny lololol whatt dummy', 'hayden is really cool btw dddddddd what time is it i need to poop', 'blake', 'hayden'  ],
      timestamp: new Date()
    }*/
  ];

  constructor() { 

  }
  
  sendMessage(text: string) {
    if(text.includes("mock_reply")) {
      this.recieveMessage("test_reply", "recieved");
      return;
    }

    this.messages.push({
      message: text,
      user: 'user',
      responses: text.includes('test_coord') ? ['the ship was last seen at 13s, 134e'] : [],
      timestamp: new Date()
    })
  }

  recieveMessage(original, recieved) {
    this.messages
      .filter(m => m.message === original)
      .forEach(m => m.responses.push(recieved));

    this.newReply.next(recieved);
  }
}

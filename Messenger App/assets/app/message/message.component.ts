import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css' ]
})
export class MessageComponent {
  @Input()  message: Message;
  @Output()  editClicked = new EventEmitter<string>();

    color = "#868987";

    constructor(private messageService: MessageService ){}
    onEdit() {
       this.editClicked.emit('A new Message');
    }
    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
    
}


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from "./message.model";

@Component({
    selector: 'app-messages',
    template: `
         <div class="row">
            <app-message-input></app-message-input>
        </div>
        <hr>
        <div>
            <app-message-list></app-message-list>
        </div>
    `

})
export class MessagesComponent {

}
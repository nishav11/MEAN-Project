import {Http, Response, Headers} from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Message } from "./message.model";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {
    
   private  messages: Message[]= [];
     messageEdit = new EventEmitter<Message>();
   constructor(private http: Http) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body,{headers: headers})
        .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'Dummy', result.obj._id, null);
                this.messages.push(message);
                return message;
        })
            .catch((error: Response) => Observable.throw(error.json()));

    }

    getMessages() {
        //giving full url is not necessary
        return this.http.get('/message')
        .map((response: Response) => {
            const messages = response.json().obj;
            let transformedMessages: Message[] = [];
            for (let message of messages){
                transformedMessages.push(new Message(message.content, 'dummy', message._id, null));
            }
            console.log(transformedMessages);
            this.messages = transformedMessages;
            return transformedMessages;
    })
    .catch((error: Response) => Observable.throw(error.json()));
}

    editMessage(message: Message) {
        this.messageEdit.emit(message);
    }
    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.patch('http://localhost:3000/message/' + message.messageId, body,{headers: headers})
            .map((response: Response) => response.json())
                .catch((error: Response) => Observable.throw(error.json()));

        }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message),1);
        return this.http.delete('http://localhost:3000/message/' + message.messageId)
        .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));

    }
}
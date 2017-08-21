import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { MessageComponent } from "./message/message.component";
import { MessageListComponent } from "./message/message-list.component";
import { MessageInputComponent } from "./message/message-input.component";
import { MessagesComponent } from "./message/messages.componet";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { Routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [BrowserModule, FormsModule, Routing, ReactiveFormsModule, HttpModule],
    
    bootstrap: [AppComponent]
})
export class AppModule {

}
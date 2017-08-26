import { Component, OnInit } from '@angular/core';
import { Errors } from "./error.model";
import { ErrorService } from "./error.service";


@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styles: [`
        .backdrop{
            background-color: rgba(0,0,0,0,6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }  
    `]
})
export class ErrorComponent implements OnInit {

    constructor(private errorService: ErrorService) { }
    
    error: Errors;
    display = 'none'
    
    onErrorHandled() {
        this.display = 'none'; 
       }

       ngOnInit() {
       this.errorService.errorOccured
       .subscribe(
           (error: Errors) =>   {
            this.error= error,
            this.display = 'block';
           });
    }
}
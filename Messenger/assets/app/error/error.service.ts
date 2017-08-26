import { EventEmitter } from "@angular/core";
import { Errors } from "./error.model";

export class ErrorService {
    errorOccured = new EventEmitter<Errors> ();

    handleError(error: any) {
        const errorData = new Errors(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    }

}
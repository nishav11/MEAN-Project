import { EventEmitter } from "@angular/core";
import { Errors } from "./error.model";
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccured = new EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new Errors(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    };
    return ErrorService;
}());
export { ErrorService };

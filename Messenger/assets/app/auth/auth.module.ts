import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";
import { ReactiveFormsModule } from "@angular/forms";
import { authRouting } from "./auth.routing";

@NgModule({

    declarations: [
        LogoutComponent,
        SignupComponent,
        SigninComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ],
    providers: []

})

export class AuthModule {

}

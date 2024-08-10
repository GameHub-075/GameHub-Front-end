import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [],
    imports: [CommonModule, LoginRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }

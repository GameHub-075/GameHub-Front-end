import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ErrorRoutingModule } from "./error-routing.module";

@NgModule({
    declarations: [],
    imports: [CommonModule, ErrorRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ErrorModule { }

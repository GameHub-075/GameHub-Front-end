import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { NotFoundRoutingModule } from "./notFound-routing.module";

@NgModule({
    declarations: [],
    imports: [CommonModule, NotFoundRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

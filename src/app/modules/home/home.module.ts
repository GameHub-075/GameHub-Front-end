import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [],
    imports: [CommonModule, HomeRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

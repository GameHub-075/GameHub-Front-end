import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ErroGenericoComponent } from "./erro-generico/erro-generico.component";
import { ErroRoutingModule } from "./erro-routing.module";

@NgModule({
    declarations: [
        ErroGenericoComponent
    ],
    imports: [
        CommonModule,
        ErroRoutingModule
    ]
})
export class ErroModule { }
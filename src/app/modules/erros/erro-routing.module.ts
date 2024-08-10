import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErroGenericoComponent } from "./erro-generico/erro-generico.component";

const routes: Routes = [
    {
        path: '', component: ErroGenericoComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErroRoutingModule { }
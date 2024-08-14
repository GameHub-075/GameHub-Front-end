import { Component } from "@angular/core";
import { BotaoComponent } from "../../shared/components/botao/botao.component";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [BotaoComponent],
})
export class HomeComponent {

    constructor(){

    }

}
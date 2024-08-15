import { Component } from "@angular/core";
import { BotaoComponent } from "../../shared/components/botao/botao.component";
import { CardComponent } from "../../shared/components/card/card.component";

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
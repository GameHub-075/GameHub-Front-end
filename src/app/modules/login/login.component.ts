import { Component } from "@angular/core";
import { CardComponent } from "../../shared/components/card/card.component";
import { TipoCard } from "../../core/models/card-models";
import { BotaoAcessarComponent } from "../../shared/components/botao-acessar/botao-acessar.component";

@Component({
    selector: "login",
    standalone: true,
    imports: [CardComponent, BotaoAcessarComponent],
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    tipoCard: TipoCard = {
        tipo: 'login'
    }

    constructor() {

    }
}
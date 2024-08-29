import { Component } from "@angular/core";
import { BotaoComponent } from "../../shared/components/botao/botao.component";
import { CarrosselComponent } from "../../shared/components/carrossel/carrossel.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [BotaoComponent, CarrosselComponent, CommonModule]
})
export class HomeComponent {
    constructor() {

    }

}
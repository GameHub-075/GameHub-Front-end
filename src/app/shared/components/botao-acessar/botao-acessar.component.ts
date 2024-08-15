import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-acessar',
  standalone: true,
  imports: [],
  templateUrl: './botao-acessar.component.html',
  styleUrl: './botao-acessar.component.scss'
})
export class BotaoAcessarComponent {
  @Input() iconeBotao!: string;
  constructor() {

  }

}

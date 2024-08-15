import { Component } from '@angular/core';
import { CardComponent } from "../../shared/components/card/card.component";
import { TipoCard } from '../../core/models/card-models';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  tipoCard: TipoCard = {
    tipo: 'erro'
}
  constructor(){

  }
}

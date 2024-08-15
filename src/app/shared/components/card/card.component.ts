import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoCard } from '../../../core/models/card-models';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  tipoCard!: TipoCard;

  constructor() {
    
  }

}

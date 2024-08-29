import { Component } from '@angular/core';
import { TopGames } from '../../../core/models/jogos';
import { JogosService } from '../../../core/services/jogos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss',
  providers: []
})
export class CarrosselComponent {
  topGames!: Array<TopGames>;
  paginaAtual = 0;
  itensPorPagina = 5;
  jogosVisiveis: Array<TopGames> = [];

  constructor(private jogosService: JogosService) {
    this.jogosService.getTopGames().subscribe(
      (res) => {
        this.topGames = res;
        this.iniciarCarrossel();
      }
    );
  }

  iniciarCarrossel() {
    this.jogosVisiveis = this.topGames.slice(0, this.itensPorPagina);
  }

  get carregaTopGames() {
    return this.jogosVisiveis;
  }

  getClassForIndex(index: number): string {
    if (index === 1 || index == 5) {
      return 'ponta';
    } else if (index === 2 || index === 4) {
      return 'meio';
    } else if (index === 3) {
      return 'centro';
    }
    return '';
  }

  avancar() {
    const proximaPagina = (this.paginaAtual + 1) % this.topGames.length; // Avança uma página, cíclico
    const itemSaindo = this.jogosVisiveis.shift(); // Remove o primeiro item
    const itemEntrando = this.topGames[(this.paginaAtual + this.itensPorPagina) % this.topGames.length]; // Próximo item na lista
  
    if (itemSaindo) {
      itemSaindo['classe'] = 'saindo'; // Classe de saída
    }
    this.jogosVisiveis.push(itemEntrando); // Adiciona o próximo item
    itemEntrando['classe'] = 'entrando'; // Classe de entrada
    this.paginaAtual = proximaPagina;
  }
  
  voltar() {
    const paginaAnterior = (this.paginaAtual - 1 + this.topGames.length) % this.topGames.length; // Cálculo cíclico
    const itemSaindo = this.jogosVisiveis.pop(); // Remove o último item
    const itemEntrando = this.topGames[paginaAnterior]; // Item anterior (cíclico)
  
    if (itemSaindo) {
      itemSaindo['classe'] = 'saindo'; // Classe de saída
    }
    this.jogosVisiveis.unshift(itemEntrando); // Adiciona o item anterior
    itemEntrando['classe'] = 'entrando'; // Classe de entrada
    this.paginaAtual = paginaAnterior;
  }
}

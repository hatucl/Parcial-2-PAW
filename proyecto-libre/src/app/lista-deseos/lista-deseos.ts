import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameStore } from '../game-store';

@Component({
  selector: 'app-lista-deseos',
  imports: [RouterLink],
  templateUrl: './lista-deseos.html',
  styleUrl: './lista-deseos.css',
})
export class ListaDeseos {
  readonly wishlistGames = computed(() => this.store.games.filter((game) => this.store.wishlistIds().includes(game.id)));

  constructor(readonly store: GameStore) {}
}
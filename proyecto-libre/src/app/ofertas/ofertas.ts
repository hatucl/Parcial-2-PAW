import { Component } from '@angular/core';
import { GameStore } from '../game-store';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  constructor(readonly store: GameStore) {}
}

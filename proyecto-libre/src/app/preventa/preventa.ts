import { Component } from '@angular/core';
import { GameStore } from '../game-store';

@Component({
  selector: 'app-preventa',
  imports: [],
  templateUrl: './preventa.html',
  styleUrl: './preventa.css',
})
export class Preventa {
  constructor(readonly store: GameStore) {}
}

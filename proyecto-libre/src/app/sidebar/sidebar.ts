import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GameStore } from '../game-store';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(readonly store: GameStore) {}
}

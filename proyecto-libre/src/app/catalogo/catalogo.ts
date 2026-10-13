import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameStore } from '../game-store';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  @ViewChild('featuredTrack') featuredTrack?: ElementRef<HTMLElement>;

  constructor(readonly store: GameStore) {}

  scrollFeatured(direction: number): void {
    this.featuredTrack?.nativeElement.scrollBy({ left: direction * 310, behavior: 'smooth' });
  }
}

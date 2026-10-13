import { Injectable, signal } from '@angular/core';

export interface Game {
  id: string;
  title: string;
  genre: string;
  platform: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  releaseDate?: string;
  label: string;
  color: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class GameStore {
  readonly games: Game[] = [
    { id: 'void-runner', title: 'Void Runner', genre: 'Acción · Aventura', platform: 'PC · PS5', price: 54900, originalPrice: 79900, discount: 31, label: 'MÁS VENDIDO', color: 'coral', description: 'Cruza una galaxia olvidada en una aventura de velocidad y descubrimiento.' },
    { id: 'wild-atlas', title: 'Wild Atlas', genre: 'Mundo abierto', platform: 'PC · Xbox', price: 68900, label: 'ELECCIÓN DEL STAFF', color: 'moss', description: 'Explora un continente vivo donde cada camino esconde una historia.' },
    { id: 'neon-drift', title: 'Neon Drift', genre: 'Carreras · Arcade', platform: 'PC · PS5', price: 32900, originalPrice: 49900, discount: 34, label: 'PRECIO ESPECIAL', color: 'blue', description: 'Carreras nocturnas, curvas imposibles y una ciudad que nunca duerme.' },
    { id: 'little-omens', title: 'Little Omens', genre: 'Indie · Puzles', platform: 'PC · Switch', price: 28900, label: 'INDIE DESTACADO', color: 'lilac', description: 'Resuelve misterios diminutos en un mundo dibujado a mano.' },
    { id: 'iron-tide', title: 'Iron Tide', genre: 'Estrategia · RPG', platform: 'PC', price: 45900, originalPrice: 69900, discount: 34, label: 'OFERTA DE LA SEMANA', color: 'amber', description: 'Construye una flota y decide el destino de un océano en guerra.' },
    { id: 'echoes-of-ember', title: 'Echoes of Ember', genre: 'RPG · Fantasía', platform: 'PC · PS5', price: 79900, label: 'NUEVO', color: 'red', description: 'Una travesía fantástica sobre memoria, fuego y segundas oportunidades.' },
    { id: 'starling-protocol', title: 'Starling Protocol', genre: 'Ciencia ficción · RPG', platform: 'PC · Xbox', price: 89900, releaseDate: '18 nov 2026', label: 'PREVENTA ABIERTA', color: 'blue', description: 'Tu tripulación, tus decisiones y una señal que nadie debía responder.' },
    { id: 'monsoon', title: 'Monsoon: Afterlight', genre: 'Aventura · Supervivencia', platform: 'PC · PS5', price: 74900, releaseDate: '04 dic 2026', label: 'LANZAMIENTO PRÓXIMO', color: 'moss', description: 'Sobrevive a una ciudad sumergida y descubre qué quedó bajo la lluvia.' },
    { id: 'paper-kingdom', title: 'Paper Kingdom', genre: 'Plataformas · Indie', platform: 'PC · Switch', price: 39900, releaseDate: '22 ene 2027', label: 'RESERVA DISPONIBLE', color: 'amber', description: 'Dóblalo todo: el escenario, las reglas y el final de esta aventura.' },
  ];

  readonly wishlistIds = signal<string[]>([]);
  readonly notice = signal('');

  get onSale(): Game[] {
    return this.games.filter((game) => game.originalPrice !== undefined);
  }

  get comingSoon(): Game[] {
    return this.games.filter((game) => game.releaseDate !== undefined);
  }

  toggleWishlist(game: Game): void {
    const ids = this.wishlistIds();
    if (ids.includes(game.id)) {
      this.wishlistIds.set(ids.filter((id) => id !== game.id));
      this.notice.set(`${game.title} salió de tu lista de deseos.`);
    } else {
      this.wishlistIds.set([...ids, game.id]);
      this.notice.set(`${game.title} se agregó a tu lista de deseos.`);
    }
  }

  hasInWishlist(game: Game): boolean {
    return this.wishlistIds().includes(game.id);
  }

  tryGame(game: Game): void {
    this.notice.set(`La demo de ${game.title} estará disponible muy pronto.`);
  }

  buyGame(game: Game): void {
    this.notice.set(`${game.title} se agregó al carrito. Total: ${this.formatPrice(game.price)}.`);
  }

  reserveGame(game: Game): void {
    this.notice.set(`Tu reserva de ${game.title} quedó registrada.`);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
  }
}
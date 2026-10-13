import { Routes } from '@angular/router';
import { Catalogo } from './catalogo/catalogo';
import { Ofertas } from './ofertas/ofertas';
import { Preventa } from './preventa/preventa';
import { SobreNosotros } from './sobre-nosotros/sobre-nosotros';
import { Registrarse } from './registrarse/registrarse';
import { ListaDeseos } from './lista-deseos/lista-deseos';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'catalogo' },
	{ path: 'catalogo', component: Catalogo, title: 'Catálogo | Pixel Forge' },
	{ path: 'ofertas', component: Ofertas, title: 'Ofertas | Pixel Forge' },
	{ path: 'preventa', component: Preventa, title: 'Próximos lanzamientos | Pixel Forge' },
	{ path: 'deseos', component: ListaDeseos, title: 'Lista de deseos | Pixel Forge' },
	{ path: 'registrarse', component: Registrarse, title: 'Crear cuenta | Pixel Forge' },
	{ path: 'sobre-nosotros', component: SobreNosotros, title: 'Sobre nosotros | Pixel Forge' },
	{ path: '**', redirectTo: 'catalogo' },
];

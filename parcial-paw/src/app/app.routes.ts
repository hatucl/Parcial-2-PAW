import { Routes } from '@angular/router';
import { Layout } from './componentes/layout/layout';
import { HojaDeVida } from './paginas/hoja-de-vida/hoja-de-vida';
import { Seccion2 } from './paginas/seccion2/seccion2';
import { Seccion3 } from './paginas/seccion3/seccion3';
import { PerfilComplementario } from './paginas/perfil-complementario/perfil-complementario';
import { Registro } from './paginas/registro/registro';

export const routes: Routes = [
  {
    path: '', 
    component: Layout,
    children: [
      { path: 'hoja-de-vida', component: HojaDeVida },
      { path: 'seccion3', component: Seccion3 },
      { path: 'perfil-complementario', component: PerfilComplementario },
      { path: 'registro', component: Registro },
      { path: 'competencias', component: Seccion2 },
      { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
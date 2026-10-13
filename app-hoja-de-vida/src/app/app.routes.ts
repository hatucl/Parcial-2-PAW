import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio';
import { Experiencia } from './experiencia/experiencia';
import { Educacion } from './educacion/educacion';
import { Contacto } from './contacto/contacto';
import { Habilidades } from './habilidades/habilidades';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio, title: 'Inicio | Hoja de vida' },
  { path: 'experiencia', component: Experiencia, title: 'Experiencia | Hoja de vida' },
  { path: 'habilidades', component: Habilidades, title: 'Habilidades | Hoja de vida' },
  { path: 'educacion', component: Educacion, title: 'Educación | Hoja de vida' },
  { path: 'contacto', component: Contacto, title: 'Contacto | Hoja de vida' },
  { path: '**', redirectTo: 'inicio' },
];
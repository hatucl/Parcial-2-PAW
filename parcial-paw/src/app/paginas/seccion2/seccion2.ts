import { Component } from '@angular/core';
import { Habilidad } from '../../interfaces/habilidad'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-seccion2',
  standalone: true,
  imports: [],
  templateUrl: './seccion2.html', // o seccion2.component.html
  styleUrl: './seccion2.css'
})
export class Seccion2 { // o Seccion2Component
  
  // Aquí declaras tu arreglo usando la interfaz
  misHabilidades: Habilidad[] = [
    { id: 1, nombre: 'HTML5 & CSS3', nivel: 'Avanzado' },
    { id: 2, nombre: 'JavaScript / DOM', nivel: 'Intermedio' },
    { id: 3, nombre: 'Angular 20', nivel: 'Básico' },
    { id: 4, nombre: 'Git & GitHub', nivel: 'Intermedio' }
  ];

}
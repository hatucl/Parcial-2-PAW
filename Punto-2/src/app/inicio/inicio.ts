import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsSection } from './components/projects-section/projects-section';
import { TechnologiesSection } from './components/technologies-section/technologies-section';
import { TopicsSection } from './components/topics-section/topics-section';
import { LearningProject, LearningTechnology, LearningTopic } from './models/learning-content';

@Component({
  standalone: true,
  imports: [RouterLink, TopicsSection, TechnologiesSection, ProjectsSection],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  readonly topics: readonly LearningTopic[] = [
    {
      id: '01',
      icon: '</>',
      color: 'topic-icon--blue',
      title: 'Estructura y estilos web',
      description: 'Construir páginas con una estructura semántica y darles forma con diseños adaptables a distintos dispositivos.',
      concepts: ['HTML', 'CSS', 'Diseño responsive'],
    },
    {
      id: '02',
      icon: '{ }',
      color: 'topic-icon--violet',
      title: 'Programación en el navegador',
      description: 'Agregar interactividad a las páginas y escribir código con tipos para desarrollar de forma más segura.',
      concepts: ['JavaScript', 'TypeScript', 'Eventos'],
    },
    {
      id: '03',
      icon: '#',
      color: 'topic-icon--mint',
      title: 'Estilos escalables',
      description: 'Organizar las hojas de estilo en módulos reutilizables y mantener una interfaz consistente.',
      concepts: ['SCSS', 'Variables', 'Anidación'],
    },
    {
      id: '04',
      icon: 'A',
      color: 'topic-icon--amber',
      title: 'Aplicaciones frontend',
      description: 'Desarrollar interfaces por componentes con Angular y utilizar Vite para servir y probar el proyecto durante el desarrollo.',
      concepts: ['Angular', 'Componentes', 'Vite'],
    },
  ];

  readonly technologies: readonly LearningTechnology[] = [
    { name: 'HTML', mark: '5', category: 'Estructura semántica', color: 'tech-mark--orange' },
    { name: 'CSS', mark: '#', category: 'Estilos visuales', color: 'tech-mark--blue' },
    { name: 'JavaScript', mark: 'JS', category: 'Interactividad web', color: 'tech-mark--orange' },
    { name: 'TypeScript', mark: 'TS', category: 'Tipado estático', color: 'tech-mark--blue' },
    { name: 'SCSS', mark: 'S', category: 'Estilos modulares', color: 'tech-mark--violet' },
    { name: 'Angular', mark: 'A', category: 'Framework frontend', color: 'tech-mark--red' },
    { name: 'Vite', mark: 'V', category: 'Servidor de desarrollo', color: 'tech-mark--mint' },
  ];

  readonly projects: readonly LearningProject[] = [
    {
      id: '01',
      type: 'HTML · CSS · SCSS',
      title: 'Maquetación de una interfaz web',
      description: 'Construcción de una página con estructura semántica, estilos propios y una presentación adaptable para escritorio y móvil.',
      tags: ['HTML semántico', 'CSS responsive', 'SCSS'],
    },
    {
      id: '02',
      type: 'JAVASCRIPT · TYPESCRIPT',
      title: 'Interactividad en el navegador',
      description: 'Práctica de eventos y manipulación de datos para responder a las acciones de las personas usuarias y actualizar la interfaz.',
      tags: ['Eventos', 'DOM', 'Tipado'],
    },
    {
      id: '03',
      type: 'ANGULAR · VITE',
      title: 'Bitácora de aprendizaje por componentes',
      description: 'Desarrollo de una página Angular que genera tarjetas de temas, tecnologías y proyectos desde datos del componente con @for.',
      tags: ['Componentes standalone', '@for', 'Vite'],
    },
  ];
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Inicio } from './inicio';

describe('Inicio', () => {
  let component: Inicio;
  let fixture: ComponentFixture<Inicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inicio],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Inicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render cards dynamically from the learning data', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.topic-card').length).toBe(component.topics.length);
    expect(element.querySelectorAll('.topic-tags li').length).toBe(
      component.topics.reduce((count, topic) => count + topic.concepts.length, 0),
    );
    expect(element.querySelectorAll('.technology-list li').length).toBe(component.technologies.length);
    expect(element.querySelectorAll('.project-card').length).toBe(component.projects.length);
    expect(element.querySelectorAll('.project-tags li').length).toBe(
      component.projects.reduce((count, project) => count + project.tags.length, 0),
    );
  });

  it('should focus the learning content on the requested web technologies', () => {
    const technologies = component.technologies.map(({ name }) => name);
    const content = JSON.stringify({
      topics: component.topics,
      projects: component.projects,
    }).toLowerCase();

    expect(technologies).toEqual(['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SCSS', 'Angular', 'Vite']);
    expect(content).not.toContain('lógica y programación');
    expect(content).not.toContain('diseño de datos');
    expect(content).not.toContain('entidad-relación');
    expect(content).not.toContain('aplicaciones y simulaciones');
    expect(content).not.toContain('arduino');
    expect(content).not.toContain('tinkercad');
  });
});

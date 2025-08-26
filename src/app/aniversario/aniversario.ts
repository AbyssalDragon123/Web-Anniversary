import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aniversario',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './aniversario.html',
  styleUrl: './aniversario.css'
})
export class AniversarioComponent {

  actividades = [
  {
    titulo: '🎨 Concurso de Arte',
    descripcion: 'Demuestra tu talento artístico con una obra original. Participa en dibujo, pintura o escultura.',
    lugar: 'Salón Municipal San Raymundo',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/arte.jpg  ',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeRYzDA-FTcsHTxEdxpOpzqZDh-Sl722MF58oMuKL2WMMsxqA/viewform?usp=preview'
  },
  {
    titulo: '🎭 Monólogos',
    descripcion: 'Exprésate en un escenario con un monólogo creativo y original.',
    lugar: 'Auditorio Principal',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/monologo.jpg',
    link: '#'
  },
  {
    titulo: '💃 Baile Moderno',
    descripcion: 'Muestra tu estilo y creatividad en una coreografía moderna.',
    lugar: 'Salón de Danza',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/baile_moderno.jpg',
    link: '#'
  },
  {
    titulo: '🕺 Concurso de Coreografía',
    descripcion: 'Participa en un concurso de coreografía grupal y demuestra tu talento.',
    lugar: 'Salón de Danza',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/coreografia.webp',
    link: '#'
  },
  {
    titulo: '🎭 Obras de Teatro',
    descripcion: 'Participa en obras teatrales representando distintos personajes.',
    lugar: 'Auditorio Principal',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/teatro.jpg',
    link: '#'
  },
  {
    titulo: '🎤 Canto',
    descripcion: 'Canta tu género favorito y comparte tu talento en un escenario.',
    lugar: 'Auditorio Principal',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/canto.jpg',
    link: '#'
  },
  {
    titulo: '📚 Cuenta Cuentos',
    descripcion: 'Comparte historias y relatos de manera creativa y divertida.',
    lugar: 'Biblioteca Central',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/cuentos.jpg',
    link: '#'
  },
  {
    titulo: '🤸 Gimnasia',
    descripcion: 'Demuestra tus habilidades físicas y coordinación en una rutina de gimnasia.',
    lugar: 'Gimnasio Universitario',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/gimnasia.jpg',
    link: '#'
  },
  {
    titulo: '💃 Danza Folclórica',
    descripcion: 'Participa en danzas tradicionales mostrando la riqueza cultural.',
    lugar: 'Salón de Danza',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/danzafolklorica.jpg',
    link: '#'
  },
  {
    titulo: '📝 Poesía',
    descripcion: 'Recita tus poemas y comparte tus sentimientos y creatividad.',
    lugar: 'Auditorio Principal',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/poesia.jpg',
    link: '#'
  },
  {
    titulo: '🎪 Show de Títeres',
    descripcion: 'Diviértete y entretén al público con un show de títeres creativo.',
    lugar: 'Patio Central',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/titeres.jpg',
    link: '#'
  },
  {
    titulo: '📢 Stand Publicitario',
    descripcion: 'Crea un stand para promocionar tu proyecto o actividad de manera atractiva.',
    lugar: 'Patio Central',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/promocion.png',
    link: '#'
  },
  {
    titulo: '💃 Baile en Parejas',
    descripcion: 'Muestra tu coordinación y estilo en un baile en pareja.',
    lugar: 'Salón de Danza',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/parejas.jpg',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdgzy6c1pFqRs3X6x3OMaVPz9Djk5I6T1TmmUZyWWnZ5wbnCQ/viewform?usp=preview'
  },
  {
    titulo: '🗣 Oratoria',
    descripcion: 'Exprésate con seguridad y claridad en nuestro concurso de oratoria.',
    lugar: 'Auditorio Principal',
    fecha: '27 de Septiembre, ¡NO FALTES!',
    imagen: '/oratoria.jpg',
    link: '#'
  }
];


}

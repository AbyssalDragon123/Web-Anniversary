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
      imagen: 'assets/img/arte.jpg',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeRYzDA-FTcsHTxEdxpOpzqZDh-Sl722MF58oMuKL2WMMsxqA/viewform?usp=preview'
    },
    {
      titulo: '🎤 Concurso de Canto',
      descripcion: 'Canta tu género favorito y comparte tu voz en un evento lleno de música.',
      lugar: 'Salón Municipal San Raymundo',
      fecha: '27 de Septiembre, ¡NO FALTES!',
      imagen: 'assets/img/arte.jpg',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeRYzDA-FTcsHTxEdxpOpzqZDh-Sl722MF58oMuKL2WMMsxqA/viewform?usp=preview'
    },
    {
      titulo: '📖 Recital de Poemas',
      descripcion: 'Expresa tus sentimientos y creatividad en nuestro recital de poesía.',
      lugar: 'Salón Municipal San Raymundo',
      fecha: '27 de Septiembre, ¡NO FALTES!',
      imagen: 'assets/img/arte.jpg',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeRYzDA-FTcsHTxEdxpOpzqZDh-Sl722MF58oMuKL2WMMsxqA/viewform?usp=preview'
    },
    {
      titulo: '🎭 Teatro Universitario',
      descripcion: 'Participa en la obra colectiva representando el espíritu universitario.',
      lugar: 'Salón Municipal San Raymundo',
      fecha: '27 de Septiembre, ¡NO FALTES!',
      imagen: 'assets/img/arte.jpg',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeRYzDA-FTcsHTxEdxpOpzqZDh-Sl722MF58oMuKL2WMMsxqA/viewform?usp=preview'
    }
  ];

}

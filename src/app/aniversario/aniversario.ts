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
      lugar: 'Salón de Arte - Campus Principal',
      fecha: '25 de Agosto, 10:00 AM',
      imagen: 'assets/img/arte.jpg',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeRYzDA-FTcsHTxEdxpOpzqZDh-Sl722MF58oMuKL2WMMsxqA/viewform?usp=preview'
    },
    {
      titulo: '🎤 Concurso de Canto',
      descripcion: 'Canta tu género favorito y comparte tu voz en un evento lleno de música.',
      lugar: 'Auditorio Universitario',
      fecha: '25 de Agosto, 2:00 PM',
      imagen: 'assets/img/canto.jpg'
    },
    {
      titulo: '📖 Recital de Poemas',
      descripcion: 'Expresa tus sentimientos y creatividad en nuestro recital de poesía.',
      lugar: 'Biblioteca Central',
      fecha: '26 de Agosto, 9:00 AM',
      imagen: 'assets/img/poemas.jpg'
    },
    {
      titulo: '🎭 Teatro Universitario',
      descripcion: 'Participa en la obra colectiva representando el espíritu universitario.',
      lugar: 'Teatro al Aire Libre',
      fecha: '26 de Agosto, 4:00 PM',
      imagen: 'assets/img/teatro.jpg'
    }
  ];

  inscribirse(titulo: string) {
    alert(`✅ Te has inscrito en la actividad: ${titulo}`);
  }

}

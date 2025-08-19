import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AniversarioComponent } from "./aniversario/aniversario";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AniversarioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Web-Anniversary');
}

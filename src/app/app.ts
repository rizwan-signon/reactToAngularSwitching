import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  template: `<h1>Hello World</h1>`,
  styles: `h1{ color: red; }`,
  // styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('react-to-angular');
}

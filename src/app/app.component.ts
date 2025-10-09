import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Home],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyEvents = (event: KeyboardEvent) => {
    console.log(`key pressed: ${event.key}`);
  };
}

import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log(`Count value is: ${this.count()}`);
    });
  }

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }
}

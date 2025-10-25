import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'todos',
    loadComponent: () => import('./todos/todos').then((m) => m.Todos),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },
];

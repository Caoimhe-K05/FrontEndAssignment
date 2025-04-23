import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'status',
    loadComponent: () => import('./status/status.page').then( m => m.StatusPage)
  },
  {
    path: 'plugin',
    loadComponent: () => import('./plugin/plugin.page').then( m => m.PluginPage)
  },
  {
    path: 'movie',
    loadComponent: () => import('./movie/movie.page').then( m => m.MoviePage)
  },
  {
    path: 'shop',
    loadComponent: () => import('./shop/shop.page').then( m => m.ShopPage)
  },
];

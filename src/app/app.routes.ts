import { Routes } from '@angular/router';
import { AllComponent } from './feature/all/all.component';

export const routes: Routes = [
  {
    path: '',component : AllComponent
  },
  {
    path: 'all',component : AllComponent
  },
  {
    path: 'movies',
    loadComponent: () => import('./feature/movies/movies.component').then(c=> c.MoviesComponent)
  },
  {
    path: 'people',
    loadComponent: () => import('./feature/people/people.component').then(c => c.PeopleComponent)
  },
  {
    path: 'tvseries',
    loadComponent: () => import('./feature/tvseries/tvseries.component').then(c => c.TvseriesComponent)
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./feature/movies/movie-details/movie-details.component').then(c => c.MovieDetailsComponent)
  }
];

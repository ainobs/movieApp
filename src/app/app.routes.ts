import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

export const routes: Routes = [
    {
        path: '', component: MoviesComponent,
    },
    {
        path: 'movie/:id', component: MovieCardComponent,
    },
];

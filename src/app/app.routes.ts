import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

export const routes: Routes = [
    {
        path: '', component: MoviesComponent,
    },
    {
        path: 'watch', component: WatchListComponent,
    }
    
];

import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client/client.service';
import { lastValueFrom } from 'rxjs';
import { Movie } from '../../models/api';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent,HttpClientModule, CommonModule],
  providers: [ClientService],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movieList:Movie[] = [];

  path: string = 'https://image.tmdb.org/t/p/w1280';


  constructor (
    private _activatedRoute: ActivatedRoute,
    private _clientService: ClientService
    ) {
    
  }
  ngOnInit(): void {
    this.getMovieById();
    this.fecthMovies();
  }
  getPosterUrl(movie: Movie): string {
    return this.path + movie.poster_path;
  }
  

  getMovieById() {
    this._activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      })
  }

  async fecthMovies() {
    try {
      const result = await lastValueFrom(this._clientService.getMovies());
      this.movieList = (result as any).results;
      console.log(this.movieList);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  
  
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

}

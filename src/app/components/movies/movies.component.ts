import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client/client.service';
import { lastValueFrom } from 'rxjs';
import { Movie } from '../../models/api';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WatchListService } from '../../services/watch-list.service';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [ClientService],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movieList:Movie[] = [];

  

  //movie image path
  path: string = 'https://image.tmdb.org/t/p/w300';

  constructor (
    private _activatedRoute: ActivatedRoute,
    private _clientService: ClientService,
    private watchlistService: WatchListService
    ) {}

    
  ngOnInit(): void {
    this.getMovieById();
    this.fecthMovies();
  }

  //Add to watch list method
  addToWatchlist(movie: any): void {
    this.watchlistService.addToWatchlist(movie);
    console.log(movie);
  }

  //get movie image method
  getPosterUrl(movie: Movie): string {
    return this.path + movie.poster_path;
  }
  
//Get movie ID method
  getMovieById() {
    this._activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      })
  }

  //fetch movie data from API
  async fecthMovies() {
    try {
      const result = await lastValueFrom(this._clientService.getMovies());
      this.movieList = (result as any).data;
      console.log(this.movieList);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  //API call for search method
  async onSubmit(searchTerm: string) {

    console.log('Search term:', searchTerm);
    
    try {
      const result = await lastValueFrom(this._clientService.getSearch(searchTerm));
      console.log(result);
      
        this.movieList = (result as any).results;
        
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  //method to set colour of movie ratings
  vote(num: number): string {

    if (num >= 7) {
      return 'green';
    } else if (num >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

}

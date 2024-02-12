import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/api';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private BASE_URL: string;
  private SEARCH_URL: string;

  constructor(private _httpClient: HttpClient) { 
    this.SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
    this.BASE_URL = 'https://movieappservice.onrender.com/movies';
  }

  //API Call to retrieve movie list
  getMovies(): Observable<Movie[]>{
    return this._httpClient.get<Movie[]>(`${this.BASE_URL}`);
  }

  //search API call to online movie database
  getSearch(link:string): Observable<Movie[]> {
    const apiKey = '4315e085f00f2ebab094e953e7de1c27';
    return this._httpClient.get<any>(`${this.SEARCH_URL}?api_key=${apiKey}&query=${link}`);
  }
}

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
    //this.SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?&api_key=4315e085f00f2ebab094e953e7de1c27&query=';
    this.BASE_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4315e085f00f2ebab094e953e7de1c27&page=1';
  }

  getMovies(): Observable<Movie[]>{
    return this._httpClient.get<Movie[]>(`${this.BASE_URL}`);
  }
  getSearch(link:string): Observable<Movie[]> {
    //return this._httpClient.get<Movie[]>(`${this.SEARCH_URL}${link}`);
    const apiKey = '4315e085f00f2ebab094e953e7de1c27';
    return this._httpClient.get<any>(`${this.SEARCH_URL}?api_key=${apiKey}&query=${link}`);
  }
}

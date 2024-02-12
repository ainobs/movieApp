import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private watchlist: any[] = []

  // addToWatchlist(movieId: number): void {
  //   if (!this.watchlist.includes(movieId)) {
  //     this.watchlist.push(movieId);
  //   }
  // }
  addToWatchlist(movie: any): void {
    // Check if the movie is already in the watchlist
    if (!this.watchlist.find(item => item.id === movie.id)) {
      this.watchlist.push(movie);
      console.log('service: '+ movie.title);
    }
  }

  removeFromWatchlist(movieId: number): void {
    const index = this.watchlist.indexOf(movieId);
    if (index !== -1) {
      this.watchlist.splice(index, 1);
    }
  }

  getWatchlist(): any[] {
    return this.watchlist;
  }

  constructor() { }
}

import { Component, Input, OnInit } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule, MoviesComponent],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit {
  watchlist: any[] = [];

  @Input() movie!: any;

  constructor(private watchlistService: WatchListService) {
    this.watchlist = this.watchlistService.getWatchlist();
  }
  ngOnInit(): void {
    this.test();
    
  }

  test() {
    console.log('i got here');
  }
}
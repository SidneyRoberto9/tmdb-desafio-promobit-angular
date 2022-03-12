import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/model/tmdb';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
})
export class DisplayCardComponent implements OnInit {
  movies?: Observable<Result[]>;

  constructor(private tmdb: TmdbService) {}

  ngOnInit(): void {
    this.movies = this.tmdb.getMovies$;
  }
}

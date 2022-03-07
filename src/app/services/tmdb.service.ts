import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Root } from '../model/tmdb';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  Base = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}`;

  constructor(private http: HttpClient) {}

  getPopulares(): Result[] {
    let populares: Result[] = [];
    this.http.get<Root>(this.Base).subscribe((data) => {
      data.results.map((movie) => populares.push(movie));
    });

    return populares;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root } from '../model/tmdb';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  Base = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}`;

  constructor(private http: HttpClient) {}

  getPopulares() {
    this.http.get<Root>(this.Base).subscribe((data) => {
      data.results.map((movie) => console.log(movie));
    });
  }
}

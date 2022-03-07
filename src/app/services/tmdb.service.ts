import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Root } from '../model/tmdb';
import { environment } from '../../environments/environment';
import { Movie } from '../model/movies';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  id = '';

  constructor(private http: HttpClient) {}

  getPopulares(): Observable<Root> {
    const BASE_VIDEO = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}`;

    return this.http.get<Root>(BASE_VIDEO);
  }

  getMovies(id: string): Observable<Movie> {
    const BASE_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.API_KEY}`;

    return this.http.get<Movie>(BASE_MOVIE_DETAILS);
  }
}

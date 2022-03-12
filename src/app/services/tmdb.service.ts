import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Root } from '../model/tmdb';
import { environment } from '../../environments/environment';
import { Movie } from '../model/movies';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReleaseDate } from '../model/realiseDate';
import { Cast } from '../model/casting';
import { Trailer } from '../model/trailer';
import { Recomendacoes } from '../model/recomendacoes';
import { GenreFilter } from '../model/genres';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private pageSource = new BehaviorSubject<number>(1);
  getPage$ = this.pageSource.asObservable();

  setPage(page: number) {
    this.pageSource.next(page);
  }

  private totalPageSource = new BehaviorSubject<number>(1);
  getTotalPage$ = this.totalPageSource.asObservable();

  setTotalPage(page: number) {
    this.totalPageSource.next(page);
  }

  private moviesSource = new BehaviorSubject<Result[]>([] as Result[]);
  getMovies$ = this.moviesSource.asObservable();

  setMovies(movie: Result[]) {
    this.moviesSource.next(movie);
  }

  id = '';

  constructor(private http: HttpClient) {}

  getPopulares(fill?: string[]) {
    let BASE_POPULARES;

    if (fill?.length) {
      BASE_POPULARES = `https://api.themoviedb.org/3/discover/movie?api_key=${environment.API_KEY}&language=pt-BR&page=${this.pageSource.value}&with_genres=${fill}`;
    } else {
      BASE_POPULARES = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}&language=pt-BR&page=${this.pageSource.value}`;
    }

    this.http.get<Root>(BASE_POPULARES).subscribe((data) => {
      this.setMovies(data.results);
      this.setTotalPage(data.total_pages);
    });
  }

  getMovies(id: string) {
    const BASE_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.API_KEY}&language=pt-BR`;

    return this.http.get<Movie>(BASE_MOVIE_DETAILS);
  }

  getReleaseDate(id: string) {
    const BASE_RELEASE_DATE = `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${environment.API_KEY}&language=pt-BR`;

    return this.http.get<ReleaseDate>(BASE_RELEASE_DATE);
  }

  getParticipantes(id: string) {
    const BASE_PARTICIPANTES = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${environment.API_KEY}&language=pt-BR`;

    return this.http.get<Cast>(BASE_PARTICIPANTES);
  }

  getTrailer(id: string) {
    const BASE_TRAILER = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${environment.API_KEY}&language=pt-BR`;

    return this.http.get<Trailer>(BASE_TRAILER);
  }

  getRecomendacoes(id: string) {
    const BASE_RECOMENDACOES = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${environment.API_KEY}&language=pt-BR`;

    return this.http.get<Recomendacoes>(BASE_RECOMENDACOES);
  }
}

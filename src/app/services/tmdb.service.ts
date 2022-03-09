import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root } from '../model/tmdb';
import { environment } from '../../environments/environment';
import { Movie } from '../model/movies';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReleaseDate } from '../model/realiseDate';
import { Cast } from '../model/casting';
import { Trailer } from '../model/trailer';
import { Recomendacoes } from '../model/recomendacoes';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private pageSource = new BehaviorSubject<number>(1);
  getPage$ = this.pageSource.asObservable();

  setPage(page: number) {
    this.pageSource.next(page);
  }
  id = '';

  constructor(private http: HttpClient) {}

  getPopulares() {
    const BASE_POPULARES = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}&language=pt-BR&page=${this.pageSource.value}`;

    return this.http.get<Root>(BASE_POPULARES);
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

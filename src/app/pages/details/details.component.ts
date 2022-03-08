import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastElement } from 'src/app/model/casting';
import { Movie } from 'src/app/model/movies';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string = '';
  classification: string = '';
  movie: Movie = {} as Movie;

  participantes: CastElement[] = [];

  constructor(private route: ActivatedRoute, private tmdb: TmdbService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.tmdb.getMovies(this.id).subscribe((data) => (this.movie = data));

    this.tmdb.getParticipantes(this.id).subscribe((data) => {
      data.cast.map((item) => this.participantes.push(item));
    });
  }
}

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
  produtores: CastElement[] = [];
  viewCast: CastElement[] = [];
  viewCrew: CastElement[] = [];

  trailer: string = '';

  constructor(private route: ActivatedRoute, private tmdb: TmdbService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.tmdb.getMovies(this.id).subscribe((data) => (this.movie = data));

    this.tmdb.getReleaseDate(this.id).subscribe((data) => {
      data.results.map((item) => {
        item.iso_3166_1 === 'BR'
          ? (this.classification = item.release_dates[0].certification)
          : null;
      });
    });

    this.tmdb.getParticipantes(this.id).subscribe((data) => {
      data.cast.map((item, i) => {
        this.participantes.push(item);
        if (i < 3) this.viewCast.push(item);
      });

      data.crew.map((item, i) => {
        this.produtores.push(item);
        if (i < 3) this.viewCrew.push(item);
      });
    });

    this.tmdb.getTrailer(this.id).subscribe((data) => {
      this.trailer = data.results[0].key;
    });
  }
}

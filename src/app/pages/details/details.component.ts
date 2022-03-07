import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private tmdb: TmdbService) {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.tmdb.getMovies(this.id).subscribe((data) => (this.movie = data));
    this.tmdb.getReleaseDate(this.id).subscribe((data) => {
      data.results.map((item) => {
        item.iso_3166_1 === 'BR'
          ? (this.classification = item.release_dates[0].certification)
          : null;
      });
    });
  }

  ngOnInit(): void {}
}

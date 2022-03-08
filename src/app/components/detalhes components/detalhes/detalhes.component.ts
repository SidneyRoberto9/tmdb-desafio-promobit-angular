import { Component, Input, OnInit } from '@angular/core';
import { Genre, Movie } from 'src/app/model/movies';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  @Input() movie?: Movie;
  @Input() id: string = '';

  classification: string = '';

  constructor(private tmdb: TmdbService) {
    this.tmdb.getReleaseDate(this.id).subscribe((data) => {
      data.results.map((item) => {
        item.iso_3166_1 === 'BR'
          ? (this.classification = item.release_dates[0].certification)
          : null;
      });
    });
  }

  ngOnInit(): void {}

  src = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;
  data = (date: Date) => new Date(date).toLocaleDateString();
  genres = (genre: Genre[]) => genre.map((g) => g.name).join(', ');
}

import { Component, OnInit } from '@angular/core';
import { GenreFilter } from 'src/app/model/genres';
import { Result } from 'src/app/model/tmdb';
import { TmdbService } from 'src/app/services/tmdb.service';
import { genres as g } from './genres';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active: boolean = false;
  genres = g;
  filterGenresId: string[] = [];
  movies: Result[] = [];

  constructor(private tmdb: TmdbService) {}

  ngOnInit(): void {
    this.tmdb.getPopulares();
  }

  filterGenre(id: string) {
    if (this.inFilter(id)) {
      this.filterGenresId = this.filterGenresId.filter((genre) => genre !== id);
    } else {
      this.genres.find((genre) => {
        if (genre.id === id) {
          this.filterGenresId.push(genre.id);
        }
      });
    }
    this.filtre();
  }

  inFilter(id: string) {
    return this.filterGenresId.find((genre) => genre === id);
  }

  filtre() {
    this.tmdb.getPopulares(this.filterGenresId);
  }
}

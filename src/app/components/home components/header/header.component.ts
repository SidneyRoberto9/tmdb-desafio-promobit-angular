import { Component, OnInit } from '@angular/core';
import { GenreFilter } from 'src/app/model/genres';
import { genres as g } from './genres';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active: boolean = false;
  genres = g;
  filterGenres: GenreFilter[] = [];

  constructor() {}

  ngOnInit(): void {}

  filterGenre(id: number) {
    if (this.inFilter(id)) {
      this.filterGenres = this.filterGenres.filter((genre) => genre.id !== id);
    } else {
      this.genres.find((genre) => {
        if (genre.id === id) {
          this.filterGenres.push(genre);
        }
      });
    }
  }

  inFilter(id: number) {
    return this.filterGenres.find((genre) => genre.id === id);
  }
}

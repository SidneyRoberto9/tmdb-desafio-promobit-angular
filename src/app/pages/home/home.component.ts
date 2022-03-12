import { Component, OnChanges, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies';
import { Result } from 'src/app/model/tmdb';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  paginas: number = 1;
  actualPage: number = 1;

  constructor(private tmdb: TmdbService) {}

  changePage(page: number) {
    this.tmdb.setPage(page);
    this.getPopulares();
  }

  getPopulares() {
    this.tmdb.getTotalPage$.subscribe(
      (totalPage) => (this.paginas = totalPage)
    );
    this.tmdb.getPage$.subscribe((page) => (this.actualPage = page));
  }

  tabulationPage(number: number | null) {
    let basedValue = number;
    let initialPage = 1;

    if (basedValue === null) {
      basedValue = 1;
      return Array(basedValue);
    }

    if (basedValue > 5) {
      basedValue = 5;
    }

    if (this.actualPage) {
      initialPage = Math.max(this.actualPage - 2, 1);
    }

    return Array.from(Array(basedValue).keys()).map(
      (_, index) => index + initialPage
    );
  }

  ngOnInit(): void {
    this.getPopulares();
  }
}

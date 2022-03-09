import { Component, OnChanges, OnInit } from '@angular/core';
import { Result } from 'src/app/model/tmdb';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  populares$: Result[] = [];
  paginas: any[] = [];
  actualPage: number = 1;

  constructor(private tmdb: TmdbService) {}

  changePage(page: number) {
    this.tmdb.setPage(page);
    this.getPopulares();
  }

  getPopulares() {
    this.tmdb.getPage$.subscribe((page) => {
      this.actualPage = page;
    });

    this.tmdb.getPopulares().subscribe((data) => {
      this.populares$ = data.results;
      this.paginas = new Array(500);
      for (let i = 0; i < this.paginas.length; i++) {
        this.paginas[i] = i + 1;
      }
    });
  }

  ngOnInit(): void {
    this.getPopulares();
  }
}

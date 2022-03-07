import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/model/tmdb';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  populares$: Result[] = [];

  constructor(private tmdb: TmdbService) {
    this.tmdb.getPopulares().subscribe((data) => {
      this.populares$ = data.results;
    });
  }

  ngOnInit(): void {}
}

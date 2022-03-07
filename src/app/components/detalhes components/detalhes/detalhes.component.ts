import { Component, Input, OnInit } from '@angular/core';
import { Genre, Movie } from 'src/app/model/movies';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  @Input() movie?: Movie;
  @Input() classification?: string;

  constructor() {}

  ngOnInit(): void {}

  src = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;
  data = (date: Date) => new Date(date).toLocaleDateString();
  genres = (genre: Genre[]) => genre.map((g) => g.name).join(', ');
}

import { CastElement } from 'src/app/model/casting';
import { Genre, Movie } from 'src/app/model/movies';
import { Result } from 'src/app/model/tmdb';

import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  @Input() movie?: Movie;
  @Input() participantes?: CastElement[];
  @Input() viewCast?: CastElement[];
  @Input() viewCrew?: CastElement[];
  @Input() classification?: string;
  @Input() trailer?: string;
  @Input() recomendacoes?: Result[];

  id: string = '';

  ngOnInit(): void {}

  constructor(protected _sanitizer: DomSanitizer) {}

  src = (path: string) => `https://image.tmdb.org/t/p/w500/${path}`;

  data = (date: Date) => new Date(date).toLocaleDateString();

  genres = (genre: Genre[]) => genre?.map((g) => g.name).join(', ');

  safeUrl = (path: string) =>
    this._sanitizer.bypassSecurityTrustResourceUrl(path);

  cast = (part: CastElement[] | undefined) =>
    part?.filter((p) => p.profile_path != null);
}

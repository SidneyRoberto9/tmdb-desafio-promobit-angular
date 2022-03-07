import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/model/tmdb';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
})
export class DisplayCardComponent implements OnInit {
  @Input() Populares?: Result[];
  constructor() {}

  ngOnInit(): void {}
}

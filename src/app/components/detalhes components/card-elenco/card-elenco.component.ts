import { CastElement } from 'src/app/model/casting';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-elenco',
  templateUrl: './card-elenco.component.html',
  styleUrls: ['./card-elenco.component.scss'],
})
export class CardElencoComponent implements OnInit {
  @Input() participante?: CastElement;

  constructor() {}

  ngOnInit(): void {}
}

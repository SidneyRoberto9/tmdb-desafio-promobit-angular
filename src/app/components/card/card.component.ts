import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Result } from 'src/app/model/tmdb';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() popular?: Result;

  constructor() {}

  ngOnInit(): void {}

  src = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;

  data = (data: Data) => {
    let convertDate = data.toString().replace(/-/g, ' ');
    let splittedDate = convertDate['split'](' ');

    return `${splittedDate[2]} ${this.convertMes(splittedDate[1])} ${
      splittedDate[0]
    }`;
  };

  convertMes(mes: any) {
    if (mes == '12') {
      return 'DEZ';
    } else if (mes == '11') {
      return 'NOV';
    } else if (mes == '10') {
      return 'OUT';
    } else if (mes == '09') {
      return 'SET';
    } else if (mes == '08') {
      return 'AUG';
    } else if (mes == '07') {
      return 'JUL';
    } else if (mes == '06') {
      return 'JUN';
    } else if (mes == '05') {
      return 'MAY';
    } else if (mes == '04') {
      return 'APR';
    } else if (mes == '03') {
      return 'MAR';
    } else if (mes == '02') {
      return 'FEV';
    } else if (mes == '01') {
      return 'JAN';
    }

    return 'Error';
  }
}

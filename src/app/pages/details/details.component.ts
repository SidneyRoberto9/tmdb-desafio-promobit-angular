import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {}
}

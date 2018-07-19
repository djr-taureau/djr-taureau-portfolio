import { Component, OnInit } from '@angular/core';

import { routeAnimations } from '@app/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations]
})
export class ExamplesComponent implements OnInit {
  examples = [
    { link: 'bio', label: 'Bio' },
    { link: 'books', label: 'Reads' },
    { link: 'places', label: 'Places' },
    { link: 'todos', label: 'Todos' },
  ];

  constructor() {}

  ngOnInit() {}
}

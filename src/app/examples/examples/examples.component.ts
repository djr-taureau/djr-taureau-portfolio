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
    { link: 'todos', label: 'Todos' },
    { link: 'books', label: 'Reads' },
    { link: 'theming', label: 'Facts' },
    { link: 'authenticated', label: 'Places' }
  ];

  constructor() {}

  ngOnInit() {}
}

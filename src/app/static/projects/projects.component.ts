import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { routeAnimations } from '@app/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [routeAnimations]
})

export class ProjectsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  public projects = PROJECTS;
  isCardExpanded = false;

  ngOnInit() {}

  expand() {
    this.isCardExpanded = !this.isCardExpanded;
  }
}

const  tiles = [
  { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
  { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
];
const PROJECTS: any[] = [
  {
    'title': 'Pomodoit-ngrx',
    'img': '../../../assets/projects/pomodoro-it.png',
    'altImg': 'pomdoit-ngrx',
    'github': 'https://github.com/djr-taureau/pomodoro-it-ngrx',
    'stackblitz': 'https://stackblitz.com/edit/pomo-doist-ngrx',
    'deployed': null
  },
  {
  'title': 'BlocJams-angular',
  'img': '../../../assets/projects/bloc-jams.png',
  'github': 'https://github.com/djr-taureau/Bloc-Jams-AngularJS',
  'stackblitz': null,
  'deployed': null
 },
 {
  'title': 'BlocClack',
  'img': '../../../assets/projects/bloc-clack.png',
  'github': 'https://github.com/djr-taureau/bloc-clack',
  'stackblitz': null,
  'deployed': 'http://bloc-clack.herokuapp.com'
},
// {'title': 'BlocJams-React',
// 'img': '../../../assets/projects/pomodoro-it.png',
// 'github': '',
// 'stackblitz': '',
// 'deployed': ''
// },
// {'title': 'Pomodoist-Assistant',
// 'img': '../../../assets/pomodoist.png',
// 'github': '',
// 'stackblitz': '',
// 'deployed': ''
// }
];

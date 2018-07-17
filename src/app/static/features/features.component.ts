import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})

export class FeaturesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  public projects = PROJECTS;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
//
const PROJECTS: any[] = [
  {'title': 'Pomodoit-ngrx',
   'img': '../../../assets/pomodoist.png',
   'altImg': 'pomdoit-ngrx',
   'github': 'https://github.com/djr-taureau/pomodoro-it-ngrx',
   'stackblitz': 'https://stackblitz.com/edit/pomo-doist-ngrx',
   'deployed': ''
  },
  {'title': 'BlocJams-angular',
  'img': '../../../assets/pomodoist.png',
  'github': '',
  'stackblitz': '',
  'deployed': ''
 },
 {'title': 'BlocClack',
 'img': '../../../assets/pomodoist.png',
 'github': '',
 'stackblitz': '',
 'deployed': ''
},
{'title': 'BlocJams-React',
'img': '../../../assets/pomodoist.png',
'github': '',
'stackblitz': '',
'deployed': ''
},
{'title': 'Pomodoist-Assistant',
'img': '../../../assets/pomodoist.png',
'github': '',
'stackblitz': '',
'deployed': ''
}
];

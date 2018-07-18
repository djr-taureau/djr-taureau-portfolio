import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  themeSrc: string = require('!raw-loader!./bio.component.scss-theme.scss');

  constructor() {}

  ngOnInit() {}
}

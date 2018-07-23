import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BOOK_TITLES } from './books.reducer';

import {
  ActionBookRetrieve,
  selectorBooks
} from './books.reducer';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  initialized;
  books;

  constructor(public store: Store<any>) {}

  ngOnInit() {
    this.initialized = false;
    this.books = BOOKS;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

export const BOOKS = [
  {
    title: 'Artful Making',
    author: 'By Robert Austin and Lee Devin',
    content: 'Connection between the creative process of theater artists and the collaborative process of software development',
    url: 'https://www.amazon.com/Artful-Making-Managers-About-Artists/dp/0130086959'
  },
  {
    title: 'Life 3.0',
    author: 'By Max Tegmark',
    content: 'Our future living with artificial intelligence as humans',
    url: 'https://www.amazon.com/Life-3-0-Being-Artificial-Intelligence/dp/1101946598'
  },
  {
    title: 'WTF: Whats The Future and Why It is Up to Us',
    author: 'By Tim OReilly',
    content: 'Developing a sense of what is next with the convergence of networks, platforms, cloud computing, and big data',
    url: 'https://www.oreilly.com/tim/wtf-book.html'
  },
  {
    title: 'Machine | Platform | Crowd - Harnessing Our Digital Future',
    subject: 'By Andrew McAfee and Erik Brynjolfson',
    content: 'Developing a sense of what is next with the convergence of networks, platforms, cloud computing, and big data',
    url: 'https://www.amazon.com/Machine-Platform-Crowd-Harnessing-Digital-ebook/dp/B01MAWT25I'
  },
  {
    title: 'Confident Data Skills',
    author: 'By Kirill Ermenko',
    content: 'Case Studies and Primer on strengthing your data skills and turning your ideas into innovative solutions',
    url: 'https://www.amazon.com/Confident-Data-Skills-Fundamentals-Supercharge/dp/0749481544'
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'By Cal Newport',
    content: 'An MIT Computer Science professor discusses how to practice focused work, a competitive advantage in the 21st century',
    url: 'https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692'
  },
];

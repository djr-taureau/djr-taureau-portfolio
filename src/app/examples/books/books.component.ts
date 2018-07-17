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
    this.store
      .select(selectorBooks)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((books: any) => {
        this.books = books;

        if (!this.initialized) {
          this.initialized = true;
          this.store.dispatch(
            new ActionBookRetrieve({ titles: BOOK_TITLES })
          );
        }
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from './book.model';
import * as fromBooks from '../reducers';

@Component({
  selector: 'app-books-collection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-title>Recent Reads</mat-card-title>
    </mat-card>

    <app-book-preview-list [books]="books$ | async"></app-book-preview-list>
  `,
  styles: [
    `
    mat-card-title {
      display: flex;
      justify-content: center;
    }
  `,
  ],
})
export class BooksCollectionComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<any>) {
    // this.books$ = store.pipe(select(fromBooks.getBookCollection));
  }

  ngOnInit() {
    // this.store.dispatch(new CollectionActions.Load());
  }
}

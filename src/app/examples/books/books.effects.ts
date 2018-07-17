import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  concatMap,
  catchError
} from 'rxjs/operators';

import { LocalStorageService } from '@app/core';
import { Book } from './book.model';
import {
  ActionBookRetrieve,
  ActionBookRetrieveError,
  ActionBookRetrieveSuccess,
  BOOK_KEY,
  BookActionTypes
} from './books.reducer';
import { GoogleBooksService } from './google-books.service';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions<Action>,
    private service: GoogleBooksService
  ) {}

  @Effect()
  retrieveBooks(): Observable<Action> {
    return this.actions$.ofType(BookActionTypes.RETRIEVE).pipe(
      concatMap(() =>
        this.service
          .searchBook('Artful Thinking')
          .pipe(
            map(books => new ActionBookRetrieveSuccess({ books })),
            catchError(error =>
              of(new ActionBookRetrieveError({ error }))
            )
          )
      )
    );
  }
}

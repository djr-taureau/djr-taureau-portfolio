import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from './book.model';

export const BOOK_KEY = 'EXAMPLES.BOOKS';

export const BOOK_TITLES = [
'Machine | Platform | Crowd',
'Confident Data Skills',
'WTF',
'Life 3.0'
];

export enum BookActionTypes {
  RETRIEVE = '[Book] Retrieve',
  RETRIEVE_SUCCESS = '[Book] Retrieve Success',
  RETRIEVE_ERROR = '[Book] Retrieve Error'
}

export class ActionBookRetrieve implements Action {
  readonly type = BookActionTypes.RETRIEVE;
  constructor(public payload: { titles: string[] }) {}
}

export class ActionBookRetrieveSuccess implements Action {
  readonly type = BookActionTypes.RETRIEVE_SUCCESS;
  constructor(public payload: { books: Book[] }) {}
}

export class ActionBookRetrieveError implements Action {
  readonly type = BookActionTypes.RETRIEVE_ERROR;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export type BookActions =
  | ActionBookRetrieve
  | ActionBookRetrieveSuccess
  | ActionBookRetrieveError;

export const initialState: BooksState = {
  books: [],
  titles: BOOK_TITLES,
  loading: false,
  error: null
};

export const selectorBooks = state => state.examples.books;

export function BooksReducer(
  state: BooksState = initialState,
  action: BookActions
): BooksState {
  switch (action.type) {
    case BookActionTypes.RETRIEVE:
      return {
        ...state,
        loading: true,
        books: [],
        error: null,
        titles: action.payload.titles
      };

    case BookActionTypes.RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload.books,
        error: null
      };

    case BookActionTypes.RETRIEVE_ERROR:
      return {
        ...state,
        loading: false,
        books: null,
        error: action.payload.error
      };

    default:
      return state;
  }
}


export interface BooksState {
  titles: string[];
  loading: boolean;
  books?: Book[];
  error?: HttpErrorResponse;
}

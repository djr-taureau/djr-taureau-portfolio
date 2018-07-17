import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from './book.model';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

@Injectable()
export class GoogleBooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private httpClient: HttpClient) {}

  searchBook(queryTitle: string): Observable<Book[]> {
    return this.httpClient
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(map(books => books.items || []));
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.API_PATH}/${volumeId}`);
  }
}


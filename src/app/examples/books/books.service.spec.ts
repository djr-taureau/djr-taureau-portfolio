import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '@app/core';

import { GoogleBooksService } from './google-books.service';

describe('GooglBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [GoogleBooksService]
    });
  });

  it(
    'should be created',
    inject([GoogleBooksService], (service: GoogleBooksService) => {
      expect(service).toBeTruthy();
    })
  );
});

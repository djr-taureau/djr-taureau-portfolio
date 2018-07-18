import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { TodosComponent } from './todos/todos.component';
import { todosReducer } from './todos/todos.reducer';
import { TodosEffects } from './todos/todos.effects';
import { BooksComponent } from './books/books.component';
import {BookAuthorsComponent} from './books/book-authors.component';
import {BookPreviewListComponent} from './books/book-preview-list.component';
import {BookPreviewComponent} from './books/book-preview.component';
import { BooksCollectionComponent  } from './books/books-collection-component';
import { BooksReducer } from './books/books.reducer';
import { BooksEffects } from './books/books.effects';
import { GoogleBooksService } from './books/google-books.service';
import { BioComponent } from './bio/bio.component';
import { PlacesComponent } from './places/places.component';
import { GalleryModule } from '@ngx-gallery/core';

@NgModule({
  imports: [
    SharedModule,
    ExamplesRoutingModule,
    StoreModule.forFeature('examples', {
      todos: todosReducer,
      books: BooksReducer
    }),
    EffectsModule.forFeature([TodosEffects, BooksEffects]),
    GalleryModule.forRoot(),
  ],
  declarations: [
    ExamplesComponent,
    BooksComponent,
    BookAuthorsComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BooksCollectionComponent,
    TodosComponent,
    BioComponent,
    PlacesComponent
  ],
  providers: [GoogleBooksService]
})
export class ExamplesModule {
  constructor() {}
}

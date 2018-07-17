import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { TodosComponent } from './todos/todos.component';
import { todosReducer } from './todos/todos.reducer';
import { TodosEffects } from './todos/todos.effects';
import { BooksComponent } from './books/books-component';
import {BookAuthorsComponent} from './books/book-authors.component';
import {BookPreviewListComponent} from './books/book-preview-list.component';
import {BookPreviewComponent} from './books/book-preview.component';
import { BooksCollectionComponent  } from './books/books-collection-component';
import { BooksReducer } from './books/books.reducer';
import { BooksEffects } from './books/books.effects';
import { GoogleBooksService } from './books/google-books.service';
import { ParentComponent } from './theming/parent/parent.component';
import { ChildComponent } from './theming/child/child.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  imports: [
    SharedModule,
    ExamplesRoutingModule,
    StoreModule.forFeature('examples', {
      todos: todosReducer,
      books: BooksReducer
    }),
    EffectsModule.forFeature([TodosEffects, BooksEffects])
  ],
  declarations: [
    ExamplesComponent,
    BooksComponent,
    BookAuthorsComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BooksCollectionComponent,
    TodosComponent,
    ParentComponent,
    ChildComponent,
    AuthenticatedComponent
  ],
  providers: [GoogleBooksService]
})
export class ExamplesModule {
  constructor() {}
}

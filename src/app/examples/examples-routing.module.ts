import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ExamplesComponent } from './examples/examples.component';
import { TodosComponent } from './todos/todos.component';
import { BooksComponent } from './books/books.component';
import { BioComponent } from './bio/bio.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'bio',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosComponent,
        data: {
          title: 'Todos'
        }
      },
      {
        path: 'books',
        component: BooksComponent,
        data: {
          title: 'books'
        }
      },
      {
        path: 'bio',
        component: BioComponent,
        data: {
          title: 'bio'
        }
      },
      {
        path: 'places',
        component: PlacesComponent,
        data: {
          title: 'places'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}

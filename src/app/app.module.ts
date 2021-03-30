import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { NewBookComponent } from './new-book/new-book.component';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BorrowerListComponent } from './borrower-list/borrower-list.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'borrowers/:bookId', component: BorrowerListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, MyComponent, BookComponent, NewBookComponent, BookListComponent, BorrowerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

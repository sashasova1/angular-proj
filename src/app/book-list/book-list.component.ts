import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: any[] = [];

  constructor(private bookService: BooksDataService) {
    bookService.getBooks().subscribe(
      (books) => this.books = books
    );
  }

  ngOnInit(): void {
  }

}

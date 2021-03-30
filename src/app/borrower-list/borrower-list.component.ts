import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-borrower-list',
  templateUrl: './borrower-list.component.html',
  styleUrls: ['./borrower-list.component.scss']
})
export class BorrowerListComponent implements OnInit {

  borrowers: any[] = [];

  constructor(private bookService: BooksDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getBorrowers(params.bookId)
    );
  }

  getBorrowers(bookName: string) {

    this.bookService.getBorrowers(bookName).subscribe(
      (borrowers) => {
        this.borrowers = borrowers;
      }
    )
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  // @Output() book = new EventEmitter();
  showForm = false;
  constructor(private bookService: BooksDataService) { }

  ngOnInit() {
  }
  onSubmit(myForm: { form: { controls: any; }; }) {
    const fields = myForm.form.controls;
    this.showForm = false;
    // this.book.emit({
    //   name: fields.name.value,
    //   author: fields.author.value,
    //   genre: fields.genre.value
    // });
    this.bookService.addBook({
      name: fields.name.value,
      author: fields.author.value,
      genre: fields.genre.value
    });
  }


}

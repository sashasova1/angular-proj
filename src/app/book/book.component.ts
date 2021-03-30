import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: any;
  @Input() bookIndex: any;
  // @Output() removeBook = new EventEmitter();
  showInfo = false;


  /*  @Output() dataChange = new EventEmitter();
 
   images = [
     'https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg',
     'https://zartschool.ru/wp-content/uploads/2018/08/FNYFmZKpPRM.jpg',
     'https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg'
   ]
   curImageIndex = 0;
   curImage!: string; */

  constructor(private bookService: BooksDataService) { }

  ngOnInit() {
    /* this.curImage = this.images[this.curImageIndex];
    setInterval(() => {
      this.changeCurImage(true);
    }, 10000); */
  }

  // delBook() {
  //   this.removeBook.emit(this.bookIndex);
  // }
  delBook() {
    this.bookService.deleteBook(this.bookIndex);
  }

  // changeCurImage(forward: boolean) {
  //   if (forward) {
  //     this.curImageIndex++;
  //   } else {
  //     this.curImageIndex--;
  //   }
  //   if (this.curImageIndex >= this.images.length) {
  //     this.curImageIndex = 0;
  //   }
  //   if (this.curImageIndex < 0) {
  //     this.curImageIndex = this.images.length - 1;
  //   }
  //   this.curImage = this.images[this.curImageIndex];
  // }

  // isOld() {
  //   return (+this.book.name[0] > 2)
  // }

  // onChange() {
  //   this.dataChange.emit(new Date());
  // }

  /* changeBookName(bookName: string) {
    this.name = bookName;
  } */
}

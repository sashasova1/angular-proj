import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  books = [
    {
      name: "Тореадори з Васюківки",
      author: "Всеволод Нестайко",
      genre: "Роман",
    },
    {
      name: "Кобзар",
      author: "Тарас Шевченко",
      genre: "Збірка віршів",
    },
  ];

  constructor() { }

  private borrowers = [
    { borrower: 'Алекс', bkName: "Тореадори з Васюківки" },
    { borrower: 'Том', bkName: "Кобзар" },
  ]

  getBorrowers(bookName: string): Observable<any[]> {
    return of(this.borrowers.filter(elem => {
      return elem.bkName === bookName;
    }))
  }

  getBooks(): Observable<any[]> {
    return new Observable<any[]>(
      subscriber => {
        subscriber.next(this.books);
        subscriber.complete();
      }
    );
  }

  addBook(book: { name: string; author: string; genre: string; }) {
    this.books.push(book)
  }

  deleteBook(index: number) {
    this.books.splice(index, 1)
  }
}

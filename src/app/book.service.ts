import {Injectable} from '@angular/core';
import {Book} from './model/book';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  addBook(book: Book): void {
// this.books.push(book);
  }

  bookExists(title: string): Observable<boolean> {
    return this.getBooks().pipe(map(
      (books: Book[]) => books.map(book => book.title)
        .indexOf(title) >= 0));
  }

  findBook(bookId: number): Observable<Book | undefined> {
    return this.getBooks().pipe(
      map(books => books.find(value => value.id === bookId))
    );
  }
}

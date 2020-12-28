import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book';
import {BookService} from '../book.service';
import {Observable, range} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // books: Book[] = [];
  books$: Observable<Book[]> | undefined;
  counter = 0;
  array: Array<string> = new Array<string>();

  constructor(private bookService: BookService) {
    this.createLatinLowercaseLetters();
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }

  increment(): void {
    this.counter++;
  }

  createLatinLowercaseLetters(): void {
    range('a'.charCodeAt(0), 26)
      .pipe(map(i => String.fromCharCode(i as number)))
      .subscribe(res => this.array.push(res));
    console.log(`Array with letters: ${this.array.join(',')}`);
  }
}

import {Injectable} from '@angular/core';
import {Book} from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[];

  constructor() {
    this.books = [
      {
        author: 'Douglas Crockford', year: 2008, title: 'JavaScript: The Good Parts', pages: 172,
        price: 350,
        description: 'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
      },
      {
        author: 'Nathan Rozentals', year: 2015, title: 'Mastering TypeScript', pages: 364,
        price: 400,
        description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks'
      },
      {author: 'Mishko Hevery', year: 2020, title: 'Angular 11'}
    ];
  }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }
}

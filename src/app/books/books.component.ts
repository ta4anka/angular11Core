import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor() {
    this.books = [
      {
        author: 'Douglas Crockford', year: 2008, title: 'JavaScript: The Good Parts', pages: 172,
        description: 'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
      },
      {
        author: 'Nathan Rozentals', year: 2015, title: 'Mastering TypeScript', pages: 364,
        description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks'
      },
      {author: 'Mishko Hevery', year: 2020, title: 'Angular 11'}
    ];
  }

  ngOnInit(): void {
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }
}

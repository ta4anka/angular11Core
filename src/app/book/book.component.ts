import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  readonly book: Book;

  constructor() {
    this.book = {author: 'Stephen King', title: 'Rita Hayworth and the Shawshank Redemption', year: 1977};
  }

  ngOnInit(): void {
  }

}

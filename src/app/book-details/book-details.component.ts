import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {NgForm} from '@angular/forms';
import {Book} from '../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  registerBook(userForm: NgForm): void {
    this.bookService.addBook(userForm.value as Book);
    userForm.reset();
  }
}

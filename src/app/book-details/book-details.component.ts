import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Book} from '../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService, formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required]),
      author: formBuilder.control('', [Validators.required]),
      year: formBuilder.control('', [Validators.required, Validators.pattern(/(?:19|20)\d{2}/)])
    });
  }

  ngOnInit(): void {
  }

  registerBook(): void {
    this.bookService.addBook(this.bookForm.value as Book);
    this.bookForm.reset();
  }

  isInvalid(controlName: string): boolean | undefined {
    return !this.bookForm.get(controlName)?.valid && this.bookForm.get(controlName)?.dirty;
  }
}

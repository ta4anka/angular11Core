import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Book} from '../model/book';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
      author: formBuilder.control('', [Validators.required, this.validateAuthor]),
      year: formBuilder.control('', [Validators.required, Validators.pattern(/(?:19|20)\d{2}/)])
    });
    this.bookForm.get('title')?.setAsyncValidators(this.validateUniqueTitle.bind(this));
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

  validateAuthor(control: FormControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    if (control.value.toString().split(' ').length >= 2) {
      return null;
    }
    return {authorTooSmall: true};
  }

  validateUniqueTitle(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.bookService.bookExists(control.value)
      .pipe(map(result => {
        if (!result) {
          return null;
        } else {
          return {titleNotUnique: true};
        }
      }));
  }
}

import {AfterContentChecked, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Book} from '../model/book';
import {StringOrNumber} from '../model/custom-types';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked {
  readonly book: Book;
  characterCount: number | undefined;

  constructor() {
    this.book = {author: 'Stephen King', title: 'Rita Hayworth and the Shawshank Redemption', year: 1977};
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  changeCharacterCount(value: StringOrNumber, event?: MouseEvent): void {
    if (value) {
      this.characterCount = String(value).length;
    } else {
      this.characterCount = 0;
    }
    console.log('Current X ' + event?.clientX);
    console.log('Current Y ' + event?.clientY);
  }

}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Book} from '../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input() book: Book | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}

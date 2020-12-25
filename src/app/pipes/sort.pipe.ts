import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '../model/book';

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {
  transform(array: Array<any>, sortBy: string, sortOrder?: string): Array<Book> {
    if (sortOrder !== 'desc') {
      return array.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    } else {
      return array.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'quote'})
export class QuotePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `"${value}"`;
  }
}

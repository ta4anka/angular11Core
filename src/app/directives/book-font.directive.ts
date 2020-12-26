import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({selector: '[appBookFont]'})
export class BookFontDirective {
  @Input() fontSelected = 'book-selected';

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  mouseEnter(): void {
    this.el.nativeElement.classList.add(this.fontSelected);
  }

  @HostListener('mouseleave')
  mouseLeave(): void {
    this.el.nativeElement.classList.remove(this.fontSelected);
  }
}

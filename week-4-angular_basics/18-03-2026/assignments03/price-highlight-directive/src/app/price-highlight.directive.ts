import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPriceHighlight]',
  standalone: true
})
export class PriceHighlightDirective {

  constructor(private el: ElementRef) {}

  @Input() set appPriceHighlight(price: number) {

    if (price > 50000) {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontWeight = 'bold';
    } else {
      this.el.nativeElement.style.color = 'green';
    }

  }

}
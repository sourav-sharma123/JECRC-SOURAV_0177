import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStatusColor]',
  standalone: true
})
export class StatusColorDirective {

  constructor(private el: ElementRef) {}

  @Input() set appStatusColor(marks: number) {

    if (marks >= 50) {
      this.el.nativeElement.style.color = 'green';
      this.el.nativeElement.style.fontWeight = 'bold';
    } else {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontWeight = 'bold';
    }

  }

}
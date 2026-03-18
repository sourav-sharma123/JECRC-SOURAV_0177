import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTheme]',
  standalone: true
})
export class ThemeDirective {

  constructor(private el: ElementRef) {}

  @Input() set appTheme(mode: string) {

    if (mode === 'dark') {
      this.el.nativeElement.style.backgroundColor = '#222';
      this.el.nativeElement.style.color = '#fff';
    } else {
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }

  }

}
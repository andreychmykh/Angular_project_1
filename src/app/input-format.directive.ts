import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format : string;

  @HostListener('focus') onFocus() {
    console.log("F")
  }

  change(value : string) {
    if (this.format == "lowercase")
      return value.toLowerCase();
    else if (this.format == "uppercase")
      return value.toUpperCase();
    else return value;
  }

  @HostListener('blur') onBlur() {
    let value : string = this.el.nativeElement.value;
    this.el.nativeElement.value = this.change(value);
  }

  

  constructor(private el: ElementRef) { }

}

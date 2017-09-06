/**
 * Created by huaifei.zhang on 9/6/2017.
 */

import { Directive , ElementRef , Input , HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]',

})


export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.background = 'yellow';
  }
  @Input('myHighlight') highColor: string;
  @Input() defaultColor: string;
  @HostListener('mouseenter') onMouseEnter1 () {
    this.highlight(this.highColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave1 () {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    // this.el.nativeElement.style.backgroundColor = this.highColor;
  }

}

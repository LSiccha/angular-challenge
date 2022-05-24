import {AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appCheckChange]'
})
export class CheckChangeDirective implements AfterViewInit, OnChanges{

  @Input() price!: number;

  constructor(private el: ElementRef) {
  }


  ngAfterViewInit(): void {
    this.checkPrice(this.price)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkPrice(this.price)
  }

  checkPrice(price: number){
    if (price >= 0){
      this.el.nativeElement.style.color = '#26a69a'
    }
    else {
      this.el.nativeElement.style.color = '#c62f3c'
    }
  }
}

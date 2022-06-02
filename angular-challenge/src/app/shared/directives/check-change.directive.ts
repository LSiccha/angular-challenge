import {AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Colors} from "../../core/enums/colors.enum";

@Directive({
  selector: '[appCheckChange]'
})
export class CheckChangeDirective implements AfterViewInit, OnChanges{

  @Input() price!: number | string;

  constructor(private el: ElementRef) {
  }


  ngAfterViewInit(): void {
    this.checkPrice(this.price)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkPrice(this.price)
  }

  checkPrice(price: number | string){
    if (Number(price)){
      if (price >= 0){
        this.el.nativeElement.style.color = Colors.Green
      }
      else {
        this.el.nativeElement.style.color = Colors.Red
      }
    }
  }
}

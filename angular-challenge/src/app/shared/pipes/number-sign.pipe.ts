import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSign'
})
export class NumberSignPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    let sign = Math.sign(value)

    if (sign > 0){
      return '+' + value
    }

    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLengh'
})
export class MaxLenghPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

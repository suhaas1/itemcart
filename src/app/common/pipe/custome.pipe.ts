import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class CustomePipe implements PipeTransform {

  transform(value: string, args?: any) {
    if (!value) {
      return null;
    } else {
      return value.substr(0, 100) + '...';
    }
  }

}

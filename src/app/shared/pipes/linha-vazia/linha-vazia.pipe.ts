import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linhaVazia'
})
export class LinhaVaziaPipe implements PipeTransform {

  transform(value: any): string {
    return Boolean(value) ? value : '-';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

import { CpfCnpjUtils } from '../../utils/cpf-cnpj.utils';

@Pipe({
  name: 'cpfCnpj',
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: string): string {
    return CpfCnpjUtils.transform(value);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { MetodoPagamento } from 'src/app/modules/pagamento/models/metodo-pagamento';
import { EnumUtils } from '../../utils/enum.utils';

@Pipe({
  name: 'metodoPagamento',
})
export class MetodoPagamentoPipe implements PipeTransform {
  transform(value: string): string {
    return EnumUtils.keyValue(MetodoPagamento, value);
  }
}

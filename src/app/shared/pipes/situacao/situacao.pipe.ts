import { Pipe, PipeTransform } from '@angular/core';
import { Situacao } from 'src/app/modules/pagamento/models/situacao';

import { EnumUtils } from '../../utils/enum.utils';

@Pipe({
  name: 'situacao',
})
export class SituacaoPipe implements PipeTransform {
  transform(value: string): string {
    return EnumUtils.keyValue(Situacao, value);
  }
}

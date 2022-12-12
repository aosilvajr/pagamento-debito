import { NgModule } from '@angular/core';

import { CpfCnpjPipe } from './cpf-cnpj/cpf-cnpj.pipe';
import { ErrorMessagePipe } from './error-message/error-message.pipe';
import { LinhaVaziaPipe } from './linha-vazia/linha-vazia.pipe';
import { MetodoPagamentoPipe } from './metodo-pagamento/metodo-pagamento.pipe';
import { SituacaoPipe } from './situacao/situacao.pipe';

@NgModule({
  declarations: [
    SituacaoPipe,
    CpfCnpjPipe,
    ErrorMessagePipe,
    MetodoPagamentoPipe,
    LinhaVaziaPipe,
  ],
  exports: [
    SituacaoPipe,
    CpfCnpjPipe,
    ErrorMessagePipe,
    MetodoPagamentoPipe,
    LinhaVaziaPipe,
  ],
})
export class PipesModule {}

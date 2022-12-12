import { NgModule } from '@angular/core';

import { CpfCnpjPipe } from './cpf-cnpj/cpf-cnpj.pipe';
import { ErrorMessagePipe } from './error-message/error-message.pipe';
import { SituacaoPipe } from './situacao/situacao.pipe';

@NgModule({
  declarations: [SituacaoPipe, CpfCnpjPipe, ErrorMessagePipe],
  exports: [SituacaoPipe, CpfCnpjPipe, ErrorMessagePipe],
})
export class PipesModule {}

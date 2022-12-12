import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoListComponent } from './views/pagamento-list/pagamento-list.component';


@NgModule({
  declarations: [
    PagamentoListComponent
  ],
  imports: [
    CommonModule,
    PagamentoRoutingModule
  ]
})
export class PagamentoModule { }

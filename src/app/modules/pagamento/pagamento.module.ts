import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoListComponent } from './views/pagamento-list/pagamento-list.component';
import { PagamentoSaveComponent } from './modals/pagamento-save/pagamento-save.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagamentoFilterComponent } from './components/pagamento-filter/pagamento-filter.component';
import { PagamentoUpdateComponent } from './modals/pagamento-update/pagamento-update.component';


@NgModule({
  declarations: [
    PagamentoListComponent,
    PagamentoSaveComponent,
    PagamentoFilterComponent,
    PagamentoUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagamentoRoutingModule
  ]
})
export class PagamentoModule { }

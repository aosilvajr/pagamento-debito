import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud/crud.service';
import { Pagamento } from 'src/app/modules/pagamento/models/pagamento';

@Injectable({
  providedIn: 'root',
})
export class PagamentoService extends CrudService<Pagamento> {
  constructor() {
    super('/payment');
  }
}

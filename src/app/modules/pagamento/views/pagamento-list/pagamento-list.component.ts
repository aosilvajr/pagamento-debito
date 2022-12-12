import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from 'src/app/modules/models/pagamento';
import { PagamentoService } from '../../services/pagamento/pagamento.service';

@Component({
  selector: 'app-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.scss'],
})
export class PagamentoListComponent implements OnInit {
  public pagamentos$!: Observable<Pagamento[]>;

  constructor(private pagamentoService: PagamentoService) {}

  ngOnInit(): void {
    this.loadPagamentos();
  }

  private loadPagamentos() {
    this.pagamentos$ = this.pagamentoService.get();
  }
}

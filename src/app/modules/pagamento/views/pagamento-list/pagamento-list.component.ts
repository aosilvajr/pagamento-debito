import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Pagamento } from 'src/app/modules/pagamento/models/pagamento';
import { PagamentoSaveComponent } from '../../modals/pagamento-save/pagamento-save.component';
import { PagamentoUpdateComponent } from '../../modals/pagamento-update/pagamento-update.component';
import { PagamentoService } from '../../services/pagamento/pagamento.service';

@Component({
  selector: 'app-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.scss'],
})
export class PagamentoListComponent implements OnInit {
  public pagamentos$: Observable<Pagamento[]> = of([]);

  constructor(
    private pagamentoService: PagamentoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadPagamentos();
  }

  public clean() {
    this.pagamentos$ = of([]);
  }

  public filter(params: any) {
    this.loadPagamentos(params);
  }

  public deletePagamento(pagamento: Pagamento) {
    this.pagamentoService.delete(pagamento.id).subscribe({
      next: () => {
        pagamento.deleted = true;
      },
    });
  }

  public openPagamentoSaveModal() {
    const modalRef = this.modalService.open(PagamentoSaveComponent, {
      size: 'xl',
      backdrop: 'static',
      centered: true,
    });

    modalRef.result.then(pagamento => this.atualizaPagamentos(pagamento));
  }

  public openPagamentoUpdateModal(pagamento: Pagamento) {
    const modalRef = this.modalService.open(PagamentoUpdateComponent, {
      backdrop: 'static',
      centered: true,
    });

    modalRef.componentInstance.pagamento = pagamento;
    modalRef.result.then(pagamento => this.atualizaPagamentos(pagamento));
  }

  private atualizaPagamentos(pagamento: Pagamento) {
    pagamento && this.loadPagamentos();
  }

  private loadPagamentos(params?: any) {
    this.pagamentos$ = this.pagamentoService.search(params);
  }
}

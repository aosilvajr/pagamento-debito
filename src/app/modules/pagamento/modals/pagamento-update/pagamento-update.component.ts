import { Component, Input, OnInit } from '@angular/core';
import { Validators, NonNullableFormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  MetodoPagamento,
  MetodoPagamentoSelect,
} from '../../models/metodo-pagamento';
import { Pagamento } from '../../models/pagamento';
import { Situacao, SituacaoSelect } from '../../models/situacao';
import { PagamentoService } from '../../services/pagamento/pagamento.service';

@Component({
  selector: 'app-pagamento-update',
  templateUrl: './pagamento-update.component.html',
  styleUrls: ['./pagamento-update.component.scss'],
})
export class PagamentoUpdateComponent implements OnInit {
  @Input() pagamento!: Pagamento;

  public form = this.formBuilder.group({
    id: [null as number | null, [Validators.required]],
    situacao: [null as Situacao | null, [Validators.required]],
  });

  public situacaoOptions = SituacaoSelect.options;

  constructor(
    private pagamentoService: PagamentoService,
    public formBuilder: NonNullableFormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  public get controls() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.populateForm();
  }

  private populateForm() {
    this.form.patchValue(this.pagamento);
  }

  public atualizarPagamento() {
    const pagamento = this.form.value as Pagamento;

    console.log(pagamento);

    this.pagamentoService
      .update(pagamento.id, pagamento)
      .subscribe(pagamento => this.activeModal.close(pagamento));
  }
}

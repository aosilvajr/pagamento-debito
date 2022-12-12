import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { distinctUntilChanged } from 'rxjs';
import {
  MetodoPagamento,
  MetodoPagamentoSelect,
} from '../../models/metodo-pagamento';
import { Pagamento } from '../../models/pagamento';
import { PagamentoService } from '../../services/pagamento/pagamento.service';

@Component({
  selector: 'app-pagamento-save',
  templateUrl: './pagamento-save.component.html',
  styleUrls: ['./pagamento-save.component.scss'],
})
export class PagamentoSaveComponent implements OnInit {
  public form = this.formBuilder.group({
    cpfCnpj: ['', [Validators.required]],
    metodoPagamento: [MetodoPagamento.BOLETO, [Validators.required]],
    numeroCartao: [null as string | null, [Validators.required]],
    valorPagamento: [0, [Validators.required]],
  });

  public metodoPagamentoOptions = MetodoPagamentoSelect.options;

  constructor(
    private pagamentoService: PagamentoService,
    public formBuilder: NonNullableFormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  public get controls() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.valueChangesMetodoPagamento();
  }

  public receberPagamento() {
    const values = this.form.getRawValue() as Pagamento;

    this.pagamentoService
      .create(values)
      .subscribe(pagamento => this.activeModal.close(pagamento));
  }

  private valueChangesMetodoPagamento() {
    const metodoPagamentoControl = this.controls.metodoPagamento;
    const numeroCartaoControl = this.controls.numeroCartao;

    metodoPagamentoControl.valueChanges.pipe(distinctUntilChanged()).subscribe({
      next: metodoPagamento => {
        console.log(metodoPagamento);

        if (
          metodoPagamento === MetodoPagamento.CARTAO_CREDITO ||
          metodoPagamento === MetodoPagamento.CARTAO_DEBITO
        ) {
          numeroCartaoControl.reset();
          numeroCartaoControl.disable();
        }
      },
    });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Situacao, SitucaoSelect } from '../../models/situacao';

@Component({
  selector: 'app-pagamento-filter',
  templateUrl: './pagamento-filter.component.html',
  styleUrls: ['./pagamento-filter.component.scss'],
})
export class PagamentoFilterComponent {
  @Output()
  private filter: EventEmitter<{ [key: string]: any }> = new EventEmitter();
  @Output()
  private clean: EventEmitter<void> = new EventEmitter();

  public form = this.formBuilder.group({
    id: [null as number | null],
    cpfCnpj: [''],
    situacao: [Situacao.PENDENTE],
  });

  public situacaoOptions = SitucaoSelect.options;

  constructor(private formBuilder: NonNullableFormBuilder) {}

  public get controls() {
    return this.form.controls;
  }

  public filterForm() {
    const searchParam = this.form.value;
    this.filter.emit(searchParam);
  }

  public cleanForm() {
    this.form.reset();
    this.clean.emit();
  }
}

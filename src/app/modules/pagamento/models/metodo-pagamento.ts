export enum MetodoPagamento {
  BOLETO = 'BOLETO',
  PIX = 'PIX',
  CARTAO_CREDITO = 'CARTAO_CREDITO',
  CARTAO_DEBITO = 'CARTAO_DEBITO',
}

export abstract class MetodoPagamentoSelect {
  static readonly options = [
    { label: 'Boleto', value: MetodoPagamento.BOLETO },
    { label: 'Pix', value: MetodoPagamento.PIX },
    { label: 'Cartão de Crédito', value: MetodoPagamento.CARTAO_CREDITO },
    { label: 'Cartão de Débito', value: MetodoPagamento.CARTAO_DEBITO },
  ];
}

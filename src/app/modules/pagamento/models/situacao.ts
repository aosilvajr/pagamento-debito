export enum Situacao {
  PENDENTE = 'PENDENTE',
  SUCESSO = 'SUCESSO',
  FALHA = 'FALHA',
}

export abstract class SituacaoSelect {
  static readonly options = [
    { label: 'Pendente', value: Situacao.PENDENTE },
    { label: 'Sucesso', value: Situacao.SUCESSO },
    { label: 'Falha', value: Situacao.FALHA },
  ];
}

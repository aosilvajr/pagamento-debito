import { MetodoPagamento } from './metodo-pagamento';
import { Situacao } from './situacao';

export type Pagamento = {
  id: number;
  cpfCnpj: string;
  metodoPagamento: MetodoPagamento;
  numeroCartao: string;
  situacao: Situacao;
  valorPagamento: number;
};

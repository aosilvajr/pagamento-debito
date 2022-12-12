type Propriedade = {
  code: number;
  status: string;
  message: string;
};

export type Page<T> = {
  dados: T;
  erro: null;
  propriedades: Propriedade;
};

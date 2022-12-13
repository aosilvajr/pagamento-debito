export class CPF {

  private static peso = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  private static calcularDigito(str: string, peso: number[]): number {

    let soma = 0;

    for (let indice = str.length - 1, digito: number; indice >= 0; indice--) {
      digito = parseInt(str.substr(indice, 1), 10);
      soma += digito * peso[peso.length - str.length + indice];
    }
    soma = 11 - soma % 11;
    return soma > 9 ? 0 : soma;
  }

  static isValid(cpf: string): boolean {

    let valido = true;

    const invalidPattern = new RegExp('^(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})$');

    if (cpf == null || (cpf.length !== 11) || invalidPattern.test(cpf)) {
      valido = false;
    } else {

      const cnpjParte = cpf.substring(0, 9);
      const digito1 = this.calcularDigito(cnpjParte, CPF.peso);
      const digito2 = this.calcularDigito(cnpjParte + digito1, CPF.peso);

      if (cpf !== cnpjParte + digito1 + digito2) {
        valido = false;
      }
    }

    return valido;
  }
}

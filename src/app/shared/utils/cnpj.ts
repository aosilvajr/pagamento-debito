export class CNPJ {
  private static peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  private static calcularDigito(str: string, peso: number[]): number {
    let soma = 0;

    for (let indice = str.length - 1, digito: number; indice >= 0; indice--) {
      digito = parseInt(str.substr(indice, 1), 10);
      soma += digito * peso[peso.length - str.length + indice];
    }
    soma = 11 - (soma % 11);
    return soma > 9 ? 0 : soma;
  }

  static isValid(cnpj: string): boolean {
    let valido = true;

    const invalidPattern = new RegExp(
      '^(0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14})$'
    );

    if (cnpj == null || cnpj.length !== 14 || invalidPattern.test(cnpj)) {
      valido = false;
    } else {
      const cnpjParte = cnpj.substring(0, 12);
      const digito1 = this.calcularDigito(cnpjParte, CNPJ.peso);
      const digito2 = this.calcularDigito(cnpjParte + digito1, CNPJ.peso);

      if (cnpj !== cnpjParte + digito1 + digito2) {
        valido = false;
      }
    }

    return valido;
  }
}

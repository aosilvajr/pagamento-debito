import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CNPJ } from '../utils/cnpj';
import { CPF } from '../utils/cpf';

export class CpfCnpjValidator {
  /**
   * Valida se o valor é um CPF ou CNPJ válido.
   */
  public static cpfCnpj(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      let valido = true;
      if (control.value.length <= 11) {
        valido = CPF.isValid(control.value);
      } else {
        valido = CNPJ.isValid(control.value);
      }

      return valido ? null : { cpfCnpj: true };
    };
  }
}

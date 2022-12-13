import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

export enum Errors {
  selectInputError = 'select',
  selectAutocompleteError = 'autocomplete',
}

export const INPUT_ERRORS: Record<Errors, ValidationErrors> = {
  [Errors.selectInputError]: { select: true },
  [Errors.selectAutocompleteError]: { autocomplete: true },
};

@Pipe({
  name: 'errorMessage',
  pure: false,
})
export class ErrorMessagePipe implements PipeTransform {
  transform(control: FormControl): string | null {
    return control.errors?.hasOwnProperty('ngbDate')
      ? this.getErrorMessage(control.errors['ngbDate'])
      : this.getErrorMessage(control.errors);
  }

  private getErrorMessage(errors: ValidationErrors | null): string | null {
    for (const error in errors) {
      if (errors.hasOwnProperty(error)) {
        return this.getMessage(error, errors);
      }
    }

    return null;
  }

  private getMessage(validatorName: string, validatorValue: any): string {
    const messages: { [key: string]: string } = {
      cpfCnpj: 'CPF ou CNPJ informado é inválido',
      required: 'Campo obrigatório.',
      select: 'Error ao carregar as opções',
      autocomplete: 'Opção selecionada não existe',
      min: `Precisa ter no mínimo ${validatorValue.min}`,
      minlength: `Precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      maxlength: `Precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      lessThan: `Valor menor que o ${validatorValue.minField}`,
      greaterThan: `Valor maior que o ${validatorValue.maxField}`,
      invalid: `Data ${validatorValue.invalid} inválida`,
      minDate: `Data ${new Date(
        validatorValue.minDate?.actual
      ).toLocaleDateString()} menor que ${new Date(
        validatorValue.minDate?.minDate.year,
        validatorValue.minDate?.minDate.month - 1,
        validatorValue.minDate?.minDate.day
      ).toLocaleDateString()}`,
      maxDate: `Data ${new Date(
        validatorValue.maxDate?.actual
      ).toLocaleDateString()} maior que ${new Date(
        validatorValue.maxDate?.maxDate.year,
        validatorValue.maxDate?.maxDate.month - 1,
        validatorValue.maxDate?.maxDate.day
      ).toLocaleDateString()}`,
    };

    return messages[validatorName];
  }
}

import { HttpParams } from '@angular/common/http';

export class HttpUtils {
  /**
   * Constrói um objeto HttpParams a partir de um objeto JS.
   *
   * @param searchParams objeto criado.
   */
  static buildHttpParams(searchParams: { [name: string]: any }): HttpParams {
    let params = new HttpParams();

    if (searchParams) {
      Object.keys(searchParams).forEach(k => {
        if (
          searchParams[k] ||
          searchParams[k] === 0 ||
          searchParams[k] === false
        ) {
          const value = searchParams[k];
          if (value instanceof Array) {
            value.forEach(item => {
              params = params.append(k, this.valueToString(item));
            });
          } else {
            params = params.append(k, this.valueToString(value));
          }
        }
      });
    }

    return params;
  }

  private static valueToString(value: any): string {
    let valueStr: string;

    if (value instanceof Date) {
      valueStr = value.toISOString();
    } else {
      valueStr = value + '';
    }

    return valueStr;
  }
}

export abstract class CpfCnpjUtils {
  public static transform(value: string) {
    return value.length === 11 ? this.toCpf(value) : this.toCnpj(value);
  }

  private static toCpf(value: string) {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  private static toCnpj(value: string) {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      '$1.$2.$3/$4-$5'
    );
  }
}

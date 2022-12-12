export abstract class EnumUtils {
  public static keyValue<T extends object>(enumType: T, value: string) {
    const index = Object.values(enumType).indexOf(value);
    const key = Object.keys(enumType)[index];

    return key
      .toLowerCase()
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

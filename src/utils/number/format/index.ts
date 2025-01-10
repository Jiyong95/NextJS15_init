export default class NumberFormat {
  static formatPad(num: number): string {
    return num.toString().padStart(2, '0');
  }
}

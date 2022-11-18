export class IntegerToBinary {
  public static toBinary(num: number): string {
    let result: string = '';
    while (num > 0) {
      result = (num & 1) + result;
      num >>= 1;
    }
    return result;
  }

  public static test() {
    console.log(IntegerToBinary.toBinary(10));
  }
}

export class Convert0To5 {
  public static convert(num: number): number {
    let result: number = 0;
    let position: number = 1;
    while (num) {
      let digit = num % 10;
      if (digit === 0)
        digit = 5;

      result = result + digit * position;
      position = position * 10;
      num = Math.floor(num / 10);
    }
    return result;
  }

  public static test() {
    console.log(Convert0To5.convert(70320));
  }
}

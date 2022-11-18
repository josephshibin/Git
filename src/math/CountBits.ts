export class CountBits {
  public static count(num: number): number {
    let bitCount: number = 0;
    if (num === 0)
      return bitCount;

    while(num) {
      let n: number = num;
      while (n) {
        if (n & 1)
          bitCount++;
        n >>= 1;
      }
      num--;
    }
    return bitCount;
  }

  public static test() {
    console.log(CountBits.count(7));
  }
}

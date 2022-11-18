export class BitMan {

  public static invertBits(num: number) {
    let bitCount = Math.trunc(Math.log2(num)) + 1;
    for (let i = 0; i < bitCount; i++) {
      num = num ^ (1 << i);
    }
    return num;
  }

  public static printBits(num: number) {
    let bitString: string = '';
    while(num) {
      bitString = (num & 1) + bitString;
      num = num >> 1;
    }
    return bitString;
  }

  public static test() {
    // console.log(BitMan.printBits(3));
    console.log(BitMan.printBits(BitMan.invertBits(5)));
  }
}

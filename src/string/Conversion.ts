export class Conversion {
  public static itoa(num) {
    let sign = 1;
    if (num < 0) {
      sign = -1;
      num = Math.abs(num);
    }

    let str = '';
    while(num) {
      str = String.fromCharCode(num%10 + 48) + str;
      num = Math.trunc(num/10);
    }
    if (sign < 0) {
      str = '-' + str;
    }
    return str;
  }

  public static atoi(str) {
    let sign = 1;
    if (str[0] == '-') sign = -1;

    let res = 0;
    for (let i = sign < 0 ? 1 : 0; i < str.length; i++) {
      res = res * 10 + str.charCodeAt(i) - '0'.charCodeAt(0);
    }
    return res * sign;
  }

  public static test() {
    console.log(Conversion.atoi('-123'));
    console.log(Conversion.atoi('123'));
    console.log(Conversion.itoa(-123));
  }
}

export class Prime {
  public static isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) return false;
    return n !== 1;
  }

  public static test() {
    console.log(Prime.isPrime(1));
    console.log(Prime.isPrime(2));
    console.log(Prime.isPrime(3));
    console.log(Prime.isPrime(4));
    console.log(Prime.isPrime(5));
    console.log(Prime.isPrime(6));
    console.log(Prime.isPrime(7));
  }
}

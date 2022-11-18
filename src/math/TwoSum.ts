export class TwoSum {
  public static find(array: number[], target: number) {
    const pairs = [];
    const map = {};
    array.forEach(e => {
      if (map[target - e])
        pairs.push([e, target - e]);
      else
        map[e] = true;
    });
    return pairs;
  }

  public static test() {
    console.log(TwoSum.find([5, 3, 2, 4, 6, 8, 1], 9));
  }
}

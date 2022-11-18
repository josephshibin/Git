class Node {
  data: any;
  left: Node = null;
  right: Node = null;

  constructor(data: any) {
    this.data = data;
  }
}

export class BSTree {

  root: Node = null;

  constructor(node: Node = null) {
    if (node)
      this.root = node;
  }

  public createFromSortedArray(arr: number[], start: number, end: number): Node {
    if (start > end)
      return;

    const mid = Math.trunc((start + end) / 2);
    const n: Node = new Node(arr[mid]);
    n.left = this.createFromSortedArray(arr, start, mid - 1);
    n.right = this.createFromSortedArray(arr, mid + 1, end);
    return n;
  }

  public printNodes(node: Node) {
    if (!node)
      return;
    this.printNodes(node.left);
    console.log(node.data);
    this.printNodes(node.right);
  }

  public static test() {
    const btree: BSTree = new BSTree();
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const node = btree.createFromSortedArray(sortedArray, 0, sortedArray.length - 1);
    btree.printNodes(node);
  }
}


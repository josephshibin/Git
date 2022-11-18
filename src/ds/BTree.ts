import {Queue} from './Queue';
import {Stack} from './Stack';

export class Node {
  data: any;
  left: Node = null;
  right: Node = null;

  constructor(data: any) {
    this.data = data;
  }
}

export class BTree {

  root: Node = null;

  constructor(node: Node = null) {
    if (node)
      this.root = node;
  }

  traverseInOrder(node: Node, results: any[]) {
    if (node === null)
      return;

    node.left && this.traverseInOrder(node.left, results);
    results.push(node.data);
    node.right && this.traverseInOrder(node.right, results);
  }

  traversePreOrder(node: Node, results: any[]) {
    if (node === null)
      return;

    results.push(node.data);
    node.left && this.traversePreOrder(node.left, results);
    node.right && this.traversePreOrder(node.right, results);
  }

  traversePreOrderIterative(node: Node, results: any[]) {
    if (node === null)
      return;

    const s: Stack<any> = new Stack<any>();
    s.push(node);

    while(s.size() > 0) {
      const t = s.pop();
      results.push(t.data);

      if (t.right)
        s.push(t.right);
      if (t.left)
        s.push(t.left);
    }
  }

  traversePostOrder(node: Node, results: any[]) {
    if (node === null)
      return;

    node.left && this.traversePostOrder(node.left, results);
    node.right && this.traversePostOrder(node.right, results);
    results.push(node.data);
  }

  traverseLevelOrder(node: Node, results: any[]) {
    const queue: Queue<any> = new Queue<any>();
    queue.enqueue(node);

    while (!queue.isEmpty()) {

      const t = queue.dequeue();

      t.left && queue.enqueue(t.left);
      t.right && queue.enqueue(t.right);

      results.push(t.data);
    }
    return queue;
  }

  depth(node: Node) {
    if (!node)
      return 0;

    const leftDepth: number = this.depth(node.left);
    const rightDepth: number = this.depth(node.right);
    return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
  }

  size(node: Node) {
    if (!node)
      return 0;
    return this.size(node.left)  + 1 + this.size(node.right);
  }

  public static test() {
    let n: Node = new Node(1);
    n.left = new Node(2);
    n.left.left = new Node(4);
    n.left.right = new Node(5);
    n.right = new Node(3);

    const btree: BTree = new BTree();
    let results = [];
    btree.traverseInOrder(n, results);
    console.log(results);

    results = []
    btree.traversePreOrder(n, results);
    console.log(results);
    results = []
    btree.traversePreOrderIterative(n, results);
    console.log(results);

    results = []
    btree.traversePostOrder(n, results);
    console.log(results);

    results = []
    btree.traverseLevelOrder(n, results);
    console.log(results);

    console.log(btree.depth(n));
    console.log(btree.size(n));
  }
}


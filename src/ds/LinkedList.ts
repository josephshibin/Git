export class Node {
  data: any;
  next: Node = null;

  constructor (data: any) {
    this.data = data;
  }
}

export class LinkedList {

  head: Node = null;

  constructor(node: Node = null) {
    if (node)
      this.head = node;
  }

  public add(data: any) {
    let n = new Node(data);
    n.next = this.head;
    this.head = n;
  }

  public append(data: any) {
    let end = new Node(data);
    if (!this.head)
      this.head = end;
    else {
      let t: Node = this.head;
      while (t.next)
        t = t.next;
      t.next = end;
    }
  }

  public deleteOne(data: any) {
    let t: Node = this.head;
    let prev: Node;
    while (t) {
      if (t.data === data) {
        if (t === this.head) {
          this.head === t.next;
          return;
        } else {
          prev.next = t.next;
          return;
        }
      }
      prev = t;
      t = t.next;
    }
  }

  public deleteAt(position: number) {
    let t: Node = this.head;
    let prev: Node;
    let currentPos = 0;
    while (t && currentPos < position) {
      prev = t;
      t = t.next;
      currentPos++;
    }
    if (t && currentPos === position)
      prev.next = t.next;
  }

  public reverse() {
    let current: Node = this.head;
    let prev, next: Node = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  public removeDuplicates() {
    let t: Node = this.head;
    let prev: Node;
    const map = {};
    while (t) {
      if (map[t.data]) {
        prev.next = t.next;
      } else {
        map[t.data] = true;
        prev = t;
      }
      t = t.next;
    }
  }

  public print() {
    let t: Node = this.head;
    while (t) {
      console.log(t.data);
      t = t.next;
    }
  }

  public static test() {
    let l: LinkedList = new LinkedList();
    console.log('Insert 6 to 1');
    l.add(6);
    l.add(5);
    l.add(4);
    l.add(3);
    l.add(2);
    l.add(1);
    l.print();

    console.log('Remove 4 and 2');
    l.deleteOne(4);
    l.deleteOne(2);
    l.print();

    console.log('Reverse');
    l.reverse();
    l.print();

    console.log('Delete at position 2');
    l.deleteAt(2);
    l.print();

    console.log('Adding duplicates');
    l.add(10);
    l.add(12);
    l.add(10);
    l.add(12);
    l.print();

    console.log('Removing duplicates');
    l.removeDuplicates();
    l.print();
  }
}


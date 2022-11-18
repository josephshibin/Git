export class Queue<T> {
  _store: T[] = [];

  enqueue(val: T) {
    this._store.push(val);
  }

  dequeue(): T | undefined {
    return this._store.shift();
  }

  isEmpty(): boolean {
    return this._store.length === 0;
  }

  size(): number {
    return this._store.length;
  }

}

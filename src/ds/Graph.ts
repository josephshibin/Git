import {Queue} from './Queue';

export class Graph {
  edges = {};

  addEdge(src: any, dest: any) {
    this.edges[src] = this.edges[src] || [];
    this.edges[src].push(dest);

    // this.edges[dest] = this.edges[dest] || [];
    // this.edges[dest].push(src);
  }

  getNeighbors(vertex: any) {
    return this.edges[vertex] || [];
  }

  dfsTraverse(vertex: any, visited: any) {
    visited[vertex] = true;
    console.log(vertex);
    this.getNeighbors(vertex).forEach(neighbor => {
      if (!visited[neighbor])
        this.dfsTraverse(neighbor, visited);
    });
  }

  dfs(vertex: any) {
    const visited = {};
    this.dfsTraverse(vertex, visited);
  }


  bfs(vertex: any) {
    const visited = {};
    const queue: Queue<any> = new Queue();
    queue.enqueue(vertex);
    visited[vertex] = true;
    while(!queue.isEmpty()) {
      const v = queue.dequeue();
      console.log(v);
      this.getNeighbors(v).forEach(neighbor => {
        if (!visited[neighbor]) {
          queue.enqueue(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }

  public static test() {
    const g: Graph = new Graph();
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);
    g.addEdge(3, 0);
    console.log('DFS:');
    g.dfs(0);
    console.log('BFS:');
    g.bfs(0);
  }
}

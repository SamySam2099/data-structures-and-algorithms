// Bi-directional graph
export class Graph {
  constructor() {
    this.adj_list = {}
  }

  addNode(node) {
    // if I don't have the node, add it
    if (!this.adj_list[node]) {
      this.adj_list[node] = []
    }
  }

  addEdge(node1, node2) {
    // we could add extra check here to see if nodes exist
    const nodesInvalid = !this.adj_list[node1] || !this.adj_list[node2]
    if (nodesInvalid) {
      throw new Error('One of the nodes is invalid')
    }

    const node1_edges = this.adj_list[node1]
    const node2_edges = this.adj_list[node2]
    // if the edge doesn't exist, then add it both ways
    if (!node1_edges.includes(node2) && !node2_edges.includes(node1)) {
      node1_edges.push(node2)
      node2_edges.push(node1)
    }
  }

  removeEdge(node1, node2) {
    const nodesInvalid = !this.adj_list[node1] || !this.adj_list[node2]
    if (nodesInvalid) {
      throw new Error('One of the nodes is invalid')
    }

    const node1_edges = this.adj_list[node1]
    const node2_edges = this.adj_list[node2]

    // we found an edge, we don't need to check the other way as
    // we put a good patern in addEdge, so we can assume bi-direction
    if (node1_edges.includes(node2)) {
      // Ignore the safety checks
      const indexOfNode2 = node1_edges.indexOf(node2)
      const indexOfNode1 = node2_edges.indexOf(node1)
      node1_edges.splice(indexOfNode2, 1)
      node2_edges.splice(indexOfNode1, 1)
    }
  }

  display() {
    // console.log(this.adj_list)
    for (const node in this.adj_list) {
      const edges = this.adj_list[node].join(', ')
      console.log(`${node} -> ${edges}`)
    }
  }
}

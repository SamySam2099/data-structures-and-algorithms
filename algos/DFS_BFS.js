import { Graph } from '../dataStructures/graph.js'

const DFS = (graph, node, visited = []) => {
  visited.push(node)
  for (const neighbour of graph.adj_list[node]) {
    if (!visited.includes(neighbour)) {
      DFS(graph, neighbour, visited)
    }
  }

  return visited
}

const BFS = (graph, node) => {
  const visited = []
  const toVisit = [node]
  while (toVisit.length) {
    let currentNode = toVisit.shift()

    if (!visited.includes(currentNode)) {
      visited.push(currentNode)
      for (const neighbour of graph.adj_list[currentNode]) {
        toVisit.push(neighbour)
      }
    }
  }

  return visited
}

const graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')

console.log(DFS(graph, 'A'))
console.log(BFS(graph, 'A'))

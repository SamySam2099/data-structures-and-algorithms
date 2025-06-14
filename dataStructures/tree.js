class Node {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value
    this.leftChild = leftChild
    this.rightChild = rightChild
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  insert(value) {
    const newNode = new Node(value)
    // check if it's the first node
    let currentNode = this.rootNode
    if (!currentNode) {
      this.rootNode = newNode
      return
    }

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.leftChild) {
          currentNode.leftChild = newNode
          return
        }
        currentNode = currentNode.leftChild
      } else {
        if (!currentNode.rightChild) {
          currentNode.rightChild = newNode
          return
        }
        currentNode = currentNode.rightChild
      }
    }
  }

  // level traversal (BFS)
  display() {
    let currentNode = this.rootNode

    const toVisit = [currentNode]
    while (toVisit.length) {
      currentNode = toVisit.shift()
      console.log(currentNode.value)

      if (currentNode.leftChild) {
        toVisit.push(currentNode.leftChild)
      }
      if (currentNode.rightChild) {
        toVisit.push(currentNode.rightChild)
      }
    }
  }
}

const bst = new BinarySearchTree()
bst.insert(3)
bst.insert(2)
bst.insert(5)
bst.insert(4)
bst.insert(8)

bst.display()

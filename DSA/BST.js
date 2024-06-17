class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }
  insert (value) {
    if(this.root === null) {
      this.root = new Node(value)
    } else {
      this.insertNode(this.root,value)
    }
  }
  insertNode(currentNode,value) {
    if(value < currentNode.value) {
       if(!currentNode.left) {
        currentNode.left = new Node(value)
       } else {
        this.insertNode(currentNode.left,value)
       }
    } else {
      if(!currentNode.right) {
        currentNode.right = new Node(value)
      } else {
        this.insertNode(currentNode.right,value)
      }
    }
  }
  inorder(root) {
    if(root) {
    this.inorder(root.left)
    console.log(root.value)
    this.inorder(root.right)
    }
  } 

  preorder(root) {
    if(root) {
      console.log(root.value)
      this.preorder(root.left)
      this.preorder(root.right)
    }
  }
  postorder(root) {
    if(root) {
      this.postorder(root.left)
      this.postorder(root.right)
      console.log(root.value)
    }
  }

}


const tree = new BinaryTree()

tree.insert(100)
tree.insert(20)
tree.insert(10)
tree.insert(30)
tree.insert(200)
tree.insert(150)
tree.insert(300)

// tree.inorder(tree.root)

tree.postorder(tree.root)
class maxHeap {
  constructor() {
    this.heap = []
  }

insert (value) {
  this.heap.push(value)
  this.maxHeapify()
}
maxHeapify() {
   let child = this.heap.length-1
   while (child > 0) {
       let parent = Math.floor(child/2)
       if(this.heap[child] > this.heap[parent]) {
        let temp = this.heap[child]
        this.heap[child] = this.heap[parent]
        this.heap[parent] = temp
         child = parent
       } else {
        break; 
       }
   }
}
printHeap () {
  console.log(this.heap)
}

}

const heap = new maxHeap()

heap.insert(10)
heap.insert(40)
heap.insert(30)
heap.insert(50)
heap.insert(55)
heap.insert(100)

heap.printHeap()
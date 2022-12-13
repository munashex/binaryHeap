class MaxBinaryHeap {
  constructor() {
    this.values = []
  } 

  insertion(element) {
    this.values.push(element) 
    this.bubbleUp()
  } 
 
  bubbleUp() {
   let idx = this.values.length - 1 
   let element = this.values[idx] 

   while(idx > 0) {
   let parentIdx = Math.floor((idx - 1)/ 2) 
   let parent = this.values[parentIdx] 
   if(element <= parent) break 
   this.values[parentIdx] = element  
   this.values[idx] = parent 
   idx = parentIdx
   } 
  } 

  extractMaxHeap() {
   let max = this.values[0] 
   let end = this.values.pop()  
   if(this.values > 0) { 
    this.values[0] = end   
    this.sinkDown()
   }
   return max 
  }  

  sinkDown() {
    let idx = 0;
    let element = this.values[0] 
    let length = this.values.length  

    while(true) { 
      let leftChildIdx = idx * 2 + 1
      let rightChildIdx = idx * 2 + 2  
      let rightChild, leftChild 

      let swap = null 

      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx] 
        if(leftChild > element) {
          swap = leftChildIdx
        }
      } 

      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx] 
        if( 
          (swap === null && rightChild > element)  
          ||  
          (swap !== null && rightChild > leftChild) 
         ){
          swap = rightChildIdx
         }
      } 
      if(swap === null) break 
      this.values[idx] = this.values[swap] 
      this.values[swap] = element 
      idx = swap
    }
  }
 
} 

let heap = new MaxBinaryHeap() 
heap.insertion(49)  
heap.insertion(60) 
heap.insertion(90) 
heap.insertion(69) 
heap.insertion(40) 
heap.extractMaxHeap() 
heap.extractMaxHeap() 
heap.insertion(20) 
heap.extractMaxHeap() 
heap.extractMaxHeap() 
heap.extractMaxHeap() 
heap.extractMaxHeap()
console.clear() 
console.log(heap)

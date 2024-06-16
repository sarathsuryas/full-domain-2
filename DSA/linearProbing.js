
class HashTable { 
  constructor(size){
    this.table = new Array(size).fill(null)
    this.size = size
  }
  hash(key) {
   let hash = 0
  for(let i = 0; i < key.length; i++) {
     hash = hash + key.charCodeAt(i) 
  }
   return hash % this.size
  }
  
  set (key, value) {
      let index = this.hash(key)
       while(this.table[index]!==null && this.table[index][0] !== key) {
        index++
       }
       this.table[index] = [key,value]
  }
  get(key) {
    let index = this.hash(key) 
    while(this.table[index]!==null && this.table[index][0]!==key) {
      index++
    }
    return this.table[index]
  }
  delete (key) {
    let index = this.hash(key)
    while(this.table[index]!==null && this.table[index][0]!==key) {
      index++
    }
    this.table[index][0] = undefined
    return this.table[index][1] = undefined
  }

}

const table = new HashTable(100)
table.set('grapes', 10000);
table.set("name","sarath")
table.set("nmae","Raju")
table.delete('nmae')
console.log(table.get("name"))

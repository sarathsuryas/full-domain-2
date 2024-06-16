const { unsubscribe } = require("diagnostics_channel")

class HashTable {
  constructor(size) {
    this.size = size
    this.table = new Array(size)
  }
  hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % this.size
  }
  set(key, value) {
      let index = this.hash(key)
      let i = 1
      while(this.table[index] !== undefined) {
           index = (index + i * i) % this.size
           i++
      }
      this.table[index] = [key,value]
  }
  get (key) {
    let index = this.hash(key)
    let i = 1
    while(this.table[index]!== undefined) {
      if(this.table[index][0] === key) {
        return this.table[index][1]
      }
      index = (index + i * i) % this.size
      i++
    }
  
  }
  delete(key) {
    let index = this.hash(key)
    let i = 1
    while(this.table[index]!== undefined) {
          if(this.table[index][0] === key) {
              this.table[index][1] = undefined 
             return
          }
          index = (index + i * i) % this.size
          i++
    }

  }

}

let table = new HashTable(100)
table.set('name',"sarath")
table.set('nmae','Alan')
table.delete('nmae')
console.log(table.get('name'))



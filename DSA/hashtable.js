class HashTable {
  constructor() {
    this.table = new Array(127)
    this.size = 0
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  set(key, value) {
    let index = this.hash(key)
    if(this.table[index]) {
        for(let i = 0; i < this.table[index].length; i++) {
          if(this.table[index][i][0] === key) {
                this.table[index][i][1] = value
                return
          }
        }
        this.table[index].push([key,value])
    } else {
      this.table[index] = []
      this.table[index].push([key,value])
    }
  }
  get (key) {
     let index = this.hash(key)
     if(this.table[index]) {
           for(let i = 0; i < this.table[index].length; i++) {
            if(this.table[index][i][0] === key) {
              return this.table[index][i][1]
            }
           }
     }
     return undefined
  } 
  remove(key) {
    let index = this.hash(key)
    if(this.table[index]) {
      for(let i = 0; i < this.table[index].length; i++) {
        if(this.table[index][i][0] === key) {
          this.table[index].splice(i,1)
          this.size--
          return true
        }

      }
    }
    return false
  }
  
}

let table = new HashTable()

table.set("name","sarath")
table.set("age",25)
table.set("ega",26)
table.remove("age")
 console.log(table.get('age'))
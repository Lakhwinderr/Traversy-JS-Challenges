class HashTable {
    constructor(limit = 14){
        this.storage = [];
        this.limit = limit;
    }

    _hash(key, max){
        let sum = 0;
        for(const char of key){
            sum += char.charCodeAt()
        }
        return sum%max;
    }
    printTable(){
        console.log(this.storage);
    }

    set(key, value){
        const idx = this._hash(key, this.limit);

        if(this.storage[idx] === undefined){
            this.storage[idx] = [[key, value]]
            return; 
        }
        //possible that already exists the same key, replace with new value
        let inserted = false;
        this.storage[idx].forEach(item => {
            console.log(item)
            if(item[0] === key){
                item[1] = value;
                inserted = true;
            }
        })
        //possible that you got the same hash key for different key;
        if(!inserted){
            this.storage[idx].push([key, value]);
        }
    }

    get(key){
        const idx = this._hash(key, this.limit)
        if(this.storage[idx] === undefined ){
            return undefined;
        }
        else{
            let value = false;
            this.storage[idx].forEach(pair => {
                
                if(key === pair[0]){
                    value = pair[1]
                }
            })
            return value ? value: undefined;
        }
    }
    remove(key){
        const idx = this._hash(key, this.limit)
        if(this.storage[idx] === undefined ){
            return undefined;
        }
        
        else{
            let exists = false;
            this.storage[idx].forEach((pair, index) => {
                if(pair[0] ===  key){
                    exists= true;
                    delete this.storage[idx][index]
                }
            })
            if(!exists){return undefined}
        }
        
    }

    getValues(){
        const values = []
        this.storage.forEach(bucket => {
            bucket.forEach(pair => values.push(pair[1]))
        })
        return values;
    }
}

const Map = new HashTable();
Map.set("lucky", 1234)
Map.set("love", 1223434)
// Map.printTable()
Map.set("lucky", 1343234)
Map.printTable()
console.log(Map.get("lucky"))
Map.remove("lucky")
Map.set("lucky", "greatest")
Map.printTable()
console.log(Map.getValues())
module.exports = HashTable;

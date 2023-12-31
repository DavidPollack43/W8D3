// Your code here
Array.prototype.bubbleSort = function() {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]]
                sorted = false
            }
        }
    }
    return this
}

// console.log([9,8,17,5,4].bubbleSort())

String.prototype.substrings = function() {
    let array = []
    for (let i = 0; i < this.length; i++){
        for (let j = i + 1; j < this.length + 1; j++){
            array.push(this.slice(i, j))
        } 
    }
    return array;
}

console.log("dad".substrings())

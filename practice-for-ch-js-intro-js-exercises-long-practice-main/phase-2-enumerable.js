// Your code here
function call(ele) {
    console.log(ele)
}

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
    return null
}

console.log([1,2,3].myEach(call))

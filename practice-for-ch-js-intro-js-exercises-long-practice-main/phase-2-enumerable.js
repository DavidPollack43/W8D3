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

// console.log([1,2,3].myEach(call))
 // This call back will increment the element by 1
function mapCall(ele) {
    return ele += 1; 
}
//This resulting map will make a new array with a callback, i.e. increment element + 1
Array.prototype.myMap = function(callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]));
    };
    return arr;
};

// console.log([1,2,3].myMap(mapCall))
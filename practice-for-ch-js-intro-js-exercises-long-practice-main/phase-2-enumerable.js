// Your code here
function call(acc, ele) {
    console.log(acc + ele)
}

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i)
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
// function(acc, el) => acc += el

//This method will do a callback/whatever the client wants on each element of the array and
//basically combine them, and there is an optoinal initial value.
Array.prototype.myReduce = function(callback, initialValue = this[0]) {

    let acc; //Tracking the total...or else we can't update anythnig, we can't keep track anything
    let startingIndex; //Keeping track of where we start based on if they passed in a initial value

    // This block will set up the starting index based on if they passed in a value
    if (initialValue === this[0]) {
        acc = this[0]
        startingIndex = 1
    } else {
        acc = initialValue
        startingIndex = 0
    }

    //This function will go through the array, and keep track of the acc/update it
    this.myEach(function(ele, index) {
        console.log(`The element is ${ele} and the index is ${index}`)
        if (index >= startingIndex){
            console.log(`acc before callback = ${acc}`)
            acc = callback(acc, ele)
            console.log(`acc after callback = ${acc}`)
        }
    })
    return acc;
}


console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }));

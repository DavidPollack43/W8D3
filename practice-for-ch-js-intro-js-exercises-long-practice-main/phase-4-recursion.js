// Your code here
function range(start, end) {
    if (start === end) {
        return [start]
    }
    let arr = (range(start, end - 1))
    arr.push(end)
    return arr
}

// console.log(range(3,15))
// [1]

function sumRec(arr) {
    if (arr.length === 1){
        return arr[0];
    };
    let element = arr.pop();
    return sumRec(arr) + element;
};

// console.log(sumRec([1,2,3])) // 6


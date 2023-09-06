// Your code here
function range(start, end) {
    if (start === end) {
        return [start]
    }
    let arr = (range(start, end - 1))
    arr.push(end)
    return arr
}

console.log(range(3,15))
// [1]

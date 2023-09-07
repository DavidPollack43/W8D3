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

function exponent1(base, exp) {
    if (exp === 0) {
        return 1
    }
    return exponent1(base, exp-1) * base
}

// console.log(exponent1(3, 3))

function exponent2(base, exp) {
    if (exp === 0) {
        return 1
    } else if (exp === 1) {
        return base
    }
    if (exp % 2 === 0) {
        return exponent2(base, exp/2) ** exp
    }
    if (exp % 2 === 1) {
        return exponent2(base, (exp-1)/2) ** exp
    }
}

// console.log(exponent2(3, 2))

function fibonacci(n) {
    if (n === 0){
        return []
    }else if (n === 1) {
        return [1]
    }else if (n === 2){
        return [1,1]
    }else{
        let array = fibonacci(n-1)
        return array.concat([array[array.length - 1] + array[array.length-2]])
    }
}

// console.log(fibonacci(5))

function deepDup(arr) {
    if (arr.length === 1) {
        return [arr[0]]
    }
    let newArr = deepDup(arr.pop)
    newArr.push
}

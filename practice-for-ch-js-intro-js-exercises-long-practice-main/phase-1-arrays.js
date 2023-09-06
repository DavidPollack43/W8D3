// Your code here

Array.prototype.uniq = function () {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        let ele = this[i];
        if (!array.includes(ele)) {
            array.push(ele)
        };
    };
    return array
};

// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function () {
    let array = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                array.push([i, j])
            }
        }
    }
    return array
}

console.log([-1, 0, 2, -2, 1].twoSum())

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

console.log([1,2,2,3,3,3].uniq())
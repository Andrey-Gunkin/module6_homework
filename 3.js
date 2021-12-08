function getSum(x) {
    return function (y) {
        return x + y
    }
}
let result = getSum(3);
console.log(result(4));
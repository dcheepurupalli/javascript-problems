// function add(a, b) {
//     const ans = a + b;
//     return ans;
// }



function add(a) {
    return function (b) {
        return a + b;
    }
}

console.log(add(5)(3));
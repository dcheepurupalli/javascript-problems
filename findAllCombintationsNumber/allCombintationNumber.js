// function combinationSum(candidates, target) {
//     var result = [];

//     if (candidates == null || candidates.length == 0) return result;

//     var current = [];
//     candidates.sort();

//     combinationSumHelper(candidates, target, 0, current, result);

//     return result;
// }

// function combinationSumHelper(candidates, target, j, curr, result) {
//     if (target == 0) {
//         var temp = curr.slice();
//         result.push(temp);
//         return;
//     }

//     for (var i = j; i < candidates.length; i++) {
//         if (target < candidates[i])
//             return;
//         curr.push(candidates[i]);
//         combinationSumHelper(candidates, target - candidates[i], i, curr, result);
//         curr.pop();
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let target = 10;

// console.log(combinationSum(arr, target));







// function allCombinationNumber(total, numbers) {
//     const totalAdd = [];
//     if (total === 0) {
//         return;
//     }
//     // loop that runs and checks the total and pushs into array
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         console.log(total - element);
//         totalAdd.push(element);
//         sumHelper(total - element, numbers, i, totalAdd);
//     }
// }

// function sumHelper(total, numbers, index, totalAdd) {

//     if (total <= 0) {
//         return;
//     }

//     for (let i = index; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (total < element) {
//             return;
//         }

//         console.log(total - element);
//         totalAdd.push(element);
//         sumHelper(total - element, numbers, i, totalAdd);
//     }
//     // return totalAdd;
// }


// console.log(allCombinationNumber(5, [1, 2, 3, 4, 5]));
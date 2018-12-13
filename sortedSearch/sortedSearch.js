function sortedSearch(numbers, target){
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element === target){
            return i;
        }
    }
    return -1;
}
// Time : O(n)
// Space : O(1)
console.log(sortedSearch([1,3,5,13,17], 13));


// function sortedSearchSol1(numbers, target){
//     const middle = Math.floor(numbers.length / 2);
//     for (let i = 0; i < middle; i++) {
//         const element = array[i];
//         console.log(element);
//     }
// }

// console.log(sortedSearchSol1([1,3,5,13,17], 13));
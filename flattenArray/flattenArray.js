
// [1, 2, 3, [5, 6], 7];
function flattenArray(nestedArray){
    const newItem = [];
    for (let index = 0; index < nestedArray.length; index++) {
        const element = nestedArray[index];
        if(Array.isArray(element)){
            const flatArray = flattenArray(element);
            for (let j = 0; j < flatArray.length; j++) {
                newItem.push(flatArray[j]);
            }
        }else{
            newItem.push(element);
        }
    }
    return newItem;
}

// Time : O(n)
// Space : O(n)
console.log(flattenArray([1, 2, 3, [5, 6], [[[[7]]]]])); // [ 1, 2, 3, 5, 6, 7 ]
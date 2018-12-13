
// Solution 1
function removeDuplicatesSol1(str){
    const uniq = [];
    for (let index = 0; index < str.length; index++) { // O(n)
        const element = str[index];
        if(uniq.includes(element)){ // O(n)
            continue;
        }else{
            uniq.push(element);
        }
    }
    return uniq.join('');
}

//Time :  O(n^2)
//Space : O(n)
console.time();
console.log(removeDuplicatesSol1('aabbccddeff'));  // Output => 'abcdef';
console.timeEnd();


// Solution 2
function removeDuplicatesSol2(str){
    const uniq = [];
    const chars = {};
    for (let index = 0; index < str.length; index++) { // O(n)
        const element = str[index];
        if(chars[element] === true){ // O(n)
            continue;
        }else{
            uniq.push(element);
            chars[element] = true;
        }
    }
    return uniq.join('');
}

//Time :  O(n)
//Space : O(n)
console.time();
console.log(removeDuplicatesSol2('aabbccddeff'));  // Output => 'abcdef';
console.timeEnd();


// Solution 3
function removeDuplicatesSol3(str){
    const chars = new Set(str);
    return Array.from(chars).join('');
}

console.time();
console.log(removeDuplicatesSol3('aabbccddeff'));  // Output => 'abcdef';
console.timeEnd();
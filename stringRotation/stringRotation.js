// Solution 1
function stringRotationSol1(str1, str2){

    if(str1.length !== str2.length){
        return false;
    }

    for (let index = 0; index < str1.length; index++) { // O(n)
        const rotatedString = str1.slice(index, str1.length) + str1.slice(0, index); // O(n)
        if(rotatedString === str2){
            return true;
        }   
    }
    return false;
}

// Time : O(n^2)
// Space : O(n)
console.time();
console.log(stringRotationSol1('rotation', 'tationro'));
console.timeEnd();


// Solution 2
function stringRotationSol2(str1, str2){
    return str1.length === str2.length && (str1 + str1).includes(str2); // O(n)
}

// Time : O(n)
// Space: O(n)

console.time();
console.log(stringRotationSol2('rotation', 'tationro'));
console.timeEnd();
// Solution 1
function isUniqueSol1(str){
    for (let index = 0; index < str.length; index++) { // O(n)
        if(str.lastIndexOf(str[index]) !== index){ // O(n)
            return false;
        }
        return true;
    }
}

console.log(isUniqueSol1('abcda'), isUniqueSol1('abcde'), isUniqueSol1('012345'));

// Time : O(n * n) => O(n^2)
// Space : O(1)


// Solution 2
function isUniqueSol2(str){
    const strSort = str.split('').sort(); // O(n * log(n))
    for (let index = 1; index < strSort.length; index++) { // O(n)
        if(strSort[index] === strSort[index - 1]){
            return false;
        }
        return true;
    }
}


// Time : O(n * logn) + O(n)
//        O(n + n * logn) => O(n * (1 + logn) = > O(n logn)
//Space O(n);          

console.log(isUniqueSol2('abcda'), isUniqueSol2('abcde'), isUniqueSol2('012345'));


// Solution 3
function isUniqueSol3(str){
    const chars = {};
    for (let index = 0; index < str.length; index++) {  //O(n)
        const element = str[index];
        if(chars[element] === true){
            return false;
        }
        chars[element] = true;
    }
    return true;
}

// Time : O(n)
// Space : O(n)
console.log(isUniqueSol3('abcda'), isUniqueSol3('abcde'), isUniqueSol3('012345'));


//Soluion 4 => ES6 Set()
function isUniqueSol4(str){
    const chars = new Set;
    for (let index = 0; index < str.length; index++) {  //O(n)
        const element = str[index];
        if(chars.has(element)){
            return false;
        }
        chars.add(element) ;
    }
    return true;
}

// Time : O(n)
// Space : O(n)
console.log(isUniqueSol4('abcda'), isUniqueSol4('abcde'), isUniqueSol4('012345'));


// Solution 5 => Optimizes ES6 Set
function isUniqueSol5(str){
    return new Set(str).size === str.length;
}

// Time : O(n)
// Space : O(n)
console.log(isUniqueSol5('abcda'), isUniqueSol5('abcde'), isUniqueSol5('012345'));
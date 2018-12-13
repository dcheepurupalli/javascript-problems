
// Solution 1
function ArraySubsetSol1(str1, str2){ // m ,n
    if(str2.length > str1.length){
        return false
    }
    const superCopy = [...str1];  // O(m)
    for (let i = 0; i < str2.length; i++) { // O(n)
       const element = superCopy.indexOf(str2[i]);  // O(m)
       if(element === -1){
            return false;
       }
       delete superCopy[element];
   }
   return true; 
}

// Time :  O(m * n )
// Space : O(m)

console.log(ArraySubsetSol1([1,2,3], [3,2,1]));
console.log(ArraySubsetSol1([1,1,2,3], [1,2,3]));
console.log(ArraySubsetSol1([1,2,3], [1,2,2,3]));
console.log(ArraySubsetSol1([1,2,3], [1,1,1]))
console.log(ArraySubsetSol1([1,2], [1,2,3]));




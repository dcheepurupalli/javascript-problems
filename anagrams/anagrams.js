function anagrams(string){
   const sorted = string.map(str => str.split('').sort().join(''));
   for (let i = 1; i < sorted.length; i++) {
      if(sorted[i] !== sorted[0]){
          return false;
      } 
   }
   return true;
}

console.log(anagrams(['abcd', 'bdac', 'cadb']));

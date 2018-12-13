function highestFrequency(str){
  const maxFrequency = {};
  let maxCount = 0;
  let maxFreqString = str[0];
  for (let index = 0; index < str.length; index++) { // O(n)
      const element = str[index];
      
      if(maxFrequency[element] === undefined){
            maxFrequency[element] = 1;
      }else{
        maxFrequency[element]++;
      }

      if(maxFrequency[element] > maxCount){
        maxCount = maxFrequency[element];
        maxFreqString = element;
      }
  }
  return maxFreqString;
}

// Time : O(n)
// Space : O(n)

console.log(highestFrequency(['abc', 'bcd', 'abc', 'abc', 'cdef']));
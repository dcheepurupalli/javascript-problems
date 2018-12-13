
// Longest Sequence of number
// function longestSequence(arr){
//     let counter = 0;
//     // arr = arr.sort(function(a, b){return a-b});
//     for (let i = 0; i < arr.length; i++) {
//         if((arr[i] === arr[i+1] + 1) || (arr[i] === 0 || arr[i-1] == 0)){
//             counter++;
//         }else{  
//             counter = 0;       
//         }
//     }
//     return counter;
// }


// console.log('Longest Sequence =>',longestSequence([3,4,0,6,7,8]));  // Longest Sequence => 5
// console.log('Longest Sequence =>', longestSequence([1,2,3,4,5,6,8,0,10,0,12,13,14,15,20,21,22,23,24,25,26,27,28,29,30]));




// function longestConsecutiveUnsorted(num) {
//     // if array is empty, return 0
//     if (num.length == 0) {
//         return 0;
//     }
 
//     var set = num;
//     var max = 1;
 
//     for (var i=0; i<num.length; i++) {
//         var left = num[i] - 1;
//         var right = num[i] + 1;
//         var count = 1;

//         if(set.indexOf(left)){

//         }
 
//         while (set.indexOf(left) != -1) {
//             count++;
//             set.splice(set.indexOf(left), 1);
//             left--;
//         }
 
//         while (set.indexOf(right) != -1) {
//             count++;
//             set.splice(set.indexOf(right), 1);
//             right++;
//         }
 
//         max = Math.max(count, max);
//     }
 
//     return max;
// }

//  console.log(longestConsecutiveUnsorted([18,3,7,4,20,19,17]));


// function longestSequence(arr){
//     let counter = 0;
//     arr = arr.sort(function(a, b){return a-b});
//     for (let i = (arr.length-2); i >= 0; i--) {
//         if((arr[i] === arr[i-1] -1) || (arr[i] === 0 || arr[i-1] == 0)){
//             counter++;
//         }else{  
//             counter = 0;       
//         }
//     }
//     return counter;
// }

// console.log(longestSequence([18,3,7,4,20,19,17]));



// function longestSequence(arr){

//     let sequences = [];
//     let prevIndex = 0;
//     let sortedArray = arr.sort((a,b) => a-b);
//     let zeros = arr.splice(0, sortedArray.lastIndexOf(0)+1);
    
//     sortedArray.forEach((currentIndex) => {
//       let diff = currentIndex - prevIndex;
//        if(diff != 1 ){
//          sequences.push([]);
//         }
    
//       sequences[sequences.length - 1].push(currentIndex);
//       prevIndex = currentIndex; 
//     });
    
//     sequences.sort((a, b) => b.length - a.length);
//     return sequences[0].length;
//     }
//     console.log(longestSequence([ 18, 3, 7, 4, 20, 19, 17]));
//     console.log()





    
    
    
    
    
//     console.log(longestSequence([6, 0, 8, 10, 21, 22, 24, 26, 27, 28, 30, 38, 42, 43, 49, 52, 61, 65, 66, 73, 81, 82, 84, 86, 88, 94, 96, 99, 108, 110, 114, 117, 120, 123, 129, 132, 141, 147, 149, 152, 163, 168, 175, 176, 181, 182, 199, 200, 201, 202, 203, 208, 210, 213, 214, 218, 223, 225, 226, 230, 231, 233, 235, 239, 243, 245, 246, 248, 269, 272, 273, 280, 284, 298, 305, 306, 311, 312, 321, 322, 337, 338, 340, 341, 344, 347, 348, 351, 355, 364, 366, 367, 368, 369, 373, 374, 376, 377, 397, 399, 404, 405, 413, 415, 424, 425, 436, 434, 437, 439, 441, 443, 447, 448, 451, 452, 458, 466, 480, 483, 485, 488, 494, 498, 500, 502, 506, 507, 508, 513, 518, 524, 525, 527, 528, 530, 535, 540, 546, 547, 548, 562, 563, 567, 569, 572, 585, 591, 594, 596, 597, 604, 613, 616, 617, 623, 625, 626, 629, 630, 634, 636, 651, 665, 671, 672, 674, 694, 689, 698, 701, 702, 703, 704, 707, 710, 712, 713, 714, 716]));





    function longestConsecutiveUnsorted(num) {
        // if array is empty, return 0
        if (num.length == 0) {
            return 0;
        }
     
        var set = num;
        var max = 1;
        var zerosCount = 2;
     
        for (var i=0; i<num.length; i++) {
            var left = num[i] - 1;
            var right = num[i] + 1;
            var sequenceStart = 0;
            var sequenceEnd = 0;
            var count = 1; 
            while (set.indexOf(left) != -1) {
                count++;
                set.splice(set.indexOf(left), 1);
                sequenceStart = left;
                left--;
            }
     
            while (set.indexOf(right) != -1) {
                count++;
                set.splice(set.indexOf(right), 1);
                sequenceEnd = right;
                right++;
            }
           
            console.log(sequenceStart);
            console.log(sequenceEnd);
            var k = 1;
            while(k <= zerosCount){
                console.log(zerosCount);
                if(set.indexOf(sequenceStart - k -1) != -1){
                    count = count + k + 1;
                    set.splice(set.indexOf(sequenceStart - k -1), 1);
                    sequenceStart = sequenceStart - k -1;
                   // left--;
                }else if(set.indexOf(sequenceEnd + k + 1) != -1){
                    count = count + k + 1;
                    set.splice(set.indexOf(sequenceEnd + k + 1), 1);
                    sequenceEnd = sequenceEnd + k + 1;
                   // right++;
                }
                k++;
            }
            max = Math.max(count, max);
        }
     
        return max;
    }
    
    // console.log(longestConsecutiveUnsorted([18,3,7,4,20,19,17]));
     console.log(longestConsecutiveUnsorted([18,3,7,4,20,19,17,0,0,23]));




    //  var foo = [8, 0, 0, 5];
    //  foo = foo.sort();
    //  for (let index = 0; index < foo.length; index++) {
    //      const element = foo[index];
    //      if(element)
         
    //  }
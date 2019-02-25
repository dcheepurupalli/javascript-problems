/**
 * Find the first unique character in a given string or an array.
 * You are given an a string of characters including duplicates.
 * You need to find the first non - repeating / unique character.
 * 
 * input: foobar   [ r a b f]
 * output: f

 * input: aabbccdef
 * output: d

 * input: aabbcc
 * output: 'No Unique Character Found'
 * 
 */

function firstUniqueLetter(str) {
    let nonDuplicate = [];
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (nonDuplicate.indexOf(element) === -1) {
            nonDuplicate.push(element);
        } else {
            nonDuplicate.splice(nonDuplicate.indexOf(element), 1);
        }
    }

    if (nonDuplicate.length == 0) {
        return 'No Unique Character Found';
    }
    return nonDuplicate[0];
}


console.log(firstUniqueLetter('foobar')); // f
console.log(firstUniqueLetter('aabbccdef')); // d
console.log(firstUniqueLetter('aabbcc')); // No Unique Character Found
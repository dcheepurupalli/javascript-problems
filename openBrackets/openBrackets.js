function openBrackets(string){
    const open = '([{';
    const close = ')]}';
    const openStack = [];
    const matches = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if(open.includes(element)){
            openStack.push(element);
        }else if(close.includes(element)){
            const lastCloseBracket = openStack.pop();

            if(matches[element] !== lastCloseBracket){
                return false;
            }
        }
    }
    return !openStack.length;
}


console.log(openBrackets("(x + y) - (4)"));
console.log(openBrackets("((x + y) - ()"));
console.log(openBrackets("([][][(x + y) - ()]"));
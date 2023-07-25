/* create a function that reverses a string:
'Hi My name is Anfrei' should be:
ierdnA si eman yM iH*/

function reverse(str){
    let reverse = [];
    for(let index = str.length; index > 0; index--)
    {
        reverse.push(str[index]);
    }
    return reverse.join('');
}

greeting = "Hi My name is Andrea";
console.log(greeting);
console.log(reverse(greeting));

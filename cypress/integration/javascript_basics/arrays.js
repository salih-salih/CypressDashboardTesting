

let tools = ['selenium', 'cypress', 'wdio', 'uft', 'protoctor']


const string = tools.toString();

console.log(string);

const join = tools.join(' * ')
console.log(join);


const pop = tools.pop()
console.log(tools)

const push = tools.push('webshare')
console.log(tools);

const sort = tools.sort()
console.log(tools);

const reverse = tools.reverse()
console.log(tools);

tools.forEach((value)=>{
    if(value == "cypress123s"){
    console.log("cypress is trending")
}else{
    console.log('Element not found')
}
})
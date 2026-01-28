function greet(){
    console.log("hello")
}
setTimeout(greet,0)
console.log("hy")
function greet(name){
    console.log(`hello ${name}`)
}
setTimeout(greet,2000,"Uwineza")
let x = 10;
setTimeout(() => {
    x = 20;
}, 1000);

console.log(x); // still 10
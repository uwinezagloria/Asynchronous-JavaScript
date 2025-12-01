/* Write a JavaScript function that returns a Promise that resolves with a "Hello, World!" message after 1 second.*/
const mypromise=()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("Hello world")
    },1000)
    
}).then((msg)=>console.log(msg))
}
mypromise()
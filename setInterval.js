function greet(){
    console.log("hello")
}
let stop=setInterval(greet,2000)
setTimeout(()=>{
    clearInterval(stop)
},5000)

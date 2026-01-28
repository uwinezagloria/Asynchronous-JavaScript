let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("promise is resolved")
    },10000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("promise is resolved")
    },5000)
})
async function handlingPromise(){
    console.log("hello")
    let promise1=await p1
    console.log(promise1)
    console.log("hello world")
    let promise2=await p2
    console.log("promise 2")
    console.log(promise2)
    
    
}
handlingPromise()
console.log("hy")
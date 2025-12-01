// when all promises are resolved
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data from server 1")
    },1000)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data from server 2")
        
    },1000)
})
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data from server 3")
        
    },1000)
})
Promise.all([promise1,promise3,promise2]).then((message)=>console.log(message)).catch((error)=>console.log(error))
// when there is a promise not resolved
const p1=new Promise((resolve,reject)=>{
    resolve("promise 1 resolved")
})
const p2=new Promise((resolve,reject)=>{
    reject("promise 2 fails")
})
const p3=new Promise((resolve,reject)=>{
    resolve("promise 3 resolved")
})
Promise.all([p1,p2,p3]).then((message)=>console.log(message)).catch((error)=>console.log(error))
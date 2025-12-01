Promise.allSettled([
Promise.resolve("A"),
Promise.reject("B"),
Promise.resolve("C")
])
.then(console.log)
.catch(console.err)
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise")
    },1000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second promise")
    },300)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("third promise")
    },200)
})
Promise.allSettled([p2,p1,p3]).then(console.log).catch(console.err)
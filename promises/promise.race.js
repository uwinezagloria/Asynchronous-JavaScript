const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("first promise is resolved"),1000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("second promise is resolved"),600)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("Error on third promise"),500)
})
Promise.race([p1,p2,p3]).then((message)=>console.log(message)).catch((error)=>console.log(error))
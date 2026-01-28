let p=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("promise resolved")
},10000)
})
//js engine does not wait  for the promise to be resolve  it iwll run other lines when it raches to this settimeout in hangling promises in a normal way without using async and awiat
 function handlingPromise(){
    p.then((res)=>console.log(res))
    console.log("js engine will not wait for a promise so i will run before the promise")
 }
 handlingPromise()
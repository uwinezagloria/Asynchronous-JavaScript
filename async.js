async function getdata(){
    return "My data"
}
const dataPromise=getdata()
console.log(dataPromise)
dataPromise.then((res)=>console.log(res))
.catch((err)=>console.log(err))
let p=new Promise((resolve,reject)=>{
    resolve(" my promise")
})
//when async function return a promise the output will not be nested promise we will get one promise
async function getpromise(){
    return p
}
let promise=getpromise()
promise.then((res)=>console.log(res))
.catch((err)=>console.log(err))
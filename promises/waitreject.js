let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
reject("promise is rejected")
    },10000)
})
async function handlingPromise(){
    let promise=await p
    
    console.log(promise)
}
handlingPromise()

let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("promise is resolved")
    },10000)
})
async function handlingPromise(){
    let promise=await p
    console.log("js engine will wait promise to be resolve but i will run at the same time as promise even thought i wil be displayed first")
    console.log(promise)
}
handlingPromise()
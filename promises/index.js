const doubling=(num)=>{
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(num)
    },1000)
    
}).then((result)=>{
    console.log(result)
    return result*2
}).then((result)=>{
    console.log(result)
    return result*2
}).then((result)=>{
    console.log(result)
    return result*2
})
}
doubling(2)
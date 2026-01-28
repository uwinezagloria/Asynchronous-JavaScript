let voidfuncton=setTimeout(()=>{
    console.log("this function will not run")
},2000)
clearTimeout(voidfuncton)
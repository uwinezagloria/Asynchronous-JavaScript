setTimeout(function run(){
    console.log("running")
    setTimeout(run,100)
},100)
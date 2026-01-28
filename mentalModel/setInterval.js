//Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
function displayNumber(){
    console.log(3)  
}
let interval=setInterval(displayNumber,2000)
setTimeout(()=>{
    clearInterval(interval)
    console.log("done")
},5000)
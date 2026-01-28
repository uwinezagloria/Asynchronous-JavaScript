/*
Write a function that takes a URL and fetches data from that URL but
 aborts when the request takes more than 10ms */
 let controller=new AbortController()
 let signal=controller.signal
 console.log(`aborted signal  before we abort ${signal.aborted}`)
 async function fetchdata(url){
    try{
let data=await fetch('https://jsonplaceholder.typicode.com/todos/1',{signal})
let jsondata=await data.json()
console.log(jsondata)
    }
catch(error){
    console.log(error.message)
}



 }
setTimeout(()=>{
    controller.abort()
   
},100)
 console.log(`signal after aborted ${signal.absorted}`)
fetchdata()
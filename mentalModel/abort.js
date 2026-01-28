/* Write a function that takes a URL and fetches 
data from that URL but aborts when the request
 takes more than 10ms */
 
 function fetching(url){
    let controller=new AbortController()
 let signal=controller.signal
 let timeout=setTimeout(()=>{
    controller.abort()
 },10)
 return fetch(url,{signal})
 .then((res)=>{
    clearTimeout(timeout)
     return res.json()})
 .then((data)=> console.log(data)
)
.catch((err)=>{
    console.log({"error":err.name,"message":err.message})
})
 }
 fetching("https://jsonplaceholder.typicode.com/todos")
 fetching("https://jsonplaceholder.typicode.com/todos/1")
 
 

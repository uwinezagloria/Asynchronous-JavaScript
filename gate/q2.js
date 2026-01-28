/* Implement a timeout for an asynchronous fetch request. 
If the request takes longer than(5 milliseconds), it should be aborted.
https://jsonplaceholder.typicode.com/users */
async function fetching(){
    let controller=new AbortController()
    let signal=controller.signal
    let timeout=setTimeout(()=>{
        controller.abort()
    },50000)
    return await fetch("https://jsonplaceholder.typicode.com/users ",{signal})
    .then((res)=>{
        clearTimeout(timeout)
        return res.json()
    })
    .catch((err)=>console.log(err.message))
}
fetching()



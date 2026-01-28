function retryFetch(url,retries){

fetch(url)
.then(res=>res.json())
.then(data=>console.log("success",data))
.catch((err)=>{
    console.log("fails")
    if(retries===0){
    return 
}
       retryFetch(url,retries-1) 
    
})

}
retryFetch("https://jsonplacehdfghoo",3)
Promise.reject("Rejected promise")
.then((message)=>console.log(message))
.catch((err)=>console.log(err))
//when all promises are resolved it returns the first to be resolved 
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("first promise is resolved"),1000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("second promise is resolved"),600)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("third promise is resolved"),500)
})
Promise.any([p1,p2,p3]).then((message)=>console.log(message)).catch((error)=>console.log(error))
// when one promise is resolved and others are rejected it ignores rejected ones and return the result of resolved only
Promise.any([
  Promise.reject("Fail A"),
  Promise.reject("Fail B"),
  Promise.resolve("Success!"),  // <-- first success
  Promise.reject("Fail C")
])
.then(console.log)
.catch(console.error);
//when all promises are rejected it return aggregateError
Promise.any([
Promise.reject("fail A"),
Promise.reject("fail B"),
Promise.reject("fail C"),
Promise.reject("fail D"),
])
.then(console.log)
.catch(console.err) /*Output:[AggregateError: All promises were rejected] {
  [errors]: [ 'fail A', 'fail B', 'fail C', 'fail D' ]
} */
//when one promise reject
Promise.any([
  Promise.reject("Fail A"),
  Promise.resolve("resolved B"),
  Promise.resolve("resolved C"),  
  Promise.reject("resolved D ")
])
.then(console.log)
.catch(console.error);
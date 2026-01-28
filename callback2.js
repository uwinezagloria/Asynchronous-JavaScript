o("uwineza",callback)
/*Create a function firstTask(callback) that prints "First task done" after 1 second.

Create a function secondTask(callback) that prints "Second task done" after 1 second.

Call firstTask and inside its callback, call secondTask.

Finally, print "All tasks completed" after the second task. */
function firstTask(cb){
  setTimeout(()=>{
    console.log("first task done")
    cb()
  },1000)
}
function secondTask(cb){
  setTimeout(()=>{
    
    console.log("second task done")
   cb()
  },1000)
  
  
}
firstTask(secondTask)

firstTask(function(){
  secondTask(function(){
  console.log("all tasks completed")
})
})
/*
Create a function calculate(a, b, callback) that:
adds a and b
sends the result to the callback
*/
function calculate(a, b, callback){
  let sum=a+b
  callback(sum)
}
function cb(result){
  console.log(result)
}
calculate(2,3,cb)
/*
Create a function checkAge(age, callback):
If age ≥ 18 → call callback with "Access granted"
Else → call callback with "Access denied"*/
function checkAge(age,callback){
if(age>=18){
    callback("Access granted")
  }
  else{
    callback("Access denied")
  }
    
      
}
function cb(message){
  console.log(message)
}
checkAge(10,cb)

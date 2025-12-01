//simple callback without callback hell
function info(name){
  return `my name is ${name}`
}
function display(callback){
  firstname="Gloria"
  console.log(callback(firstname))
}
display(info)
// another callbacks  with callback hell
function presentation(first){
    first()
}
function introduction(second){
    console.log("hello  every one")
    second()
}
function  question(third){
    console.log("is there any question")
    third()
}
function end(){
   console.log("thank you for your attention") 
}
// callback hell
presentation(function (){
    introduction(function (){
        question(function (){
        end()
    })
    })
})
const API_URL="https://api.github.com/users/uwinezagloria"
async function handlingpromise(){
    try{
const data= await fetch(API_URL) // fetch return a  promise  and it give
 const jsonValue=await data.json() //this is again a promise and to handle promise in async we use await keyword infront of promie
console.log(jsonValue)
}
catch(err){
    console.log(err)
}
    }

handlingpromise()
 let json='{"name":"uwineza"}'
try{
  let user=JSON.parse(json) 
if(!user.age){
    throw new SyntaxError("Incomplete data: no age ")
}
}
catch(err){
    let errorObject={errorName:err.name,errorMessage:err.message}
    console.log(errorObject)
}
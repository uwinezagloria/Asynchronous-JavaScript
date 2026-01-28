const users=[
    { id:1, name:"Uwineza"},
     { id:2, name:"Gloria"},
     { id:4, name:"Joe"},
]
function getuser(id){
return new Promise((resolve,reject)=>{
    for(let elem of users){
        if(id===elem.id){
    
 return resolve(`found user with id ${id}`)
 }
    } 
         reject(`user with id ${id} not found`)
})
}
getuser(2).then(res=>console.log(res)).catch(err=>console.log(err))
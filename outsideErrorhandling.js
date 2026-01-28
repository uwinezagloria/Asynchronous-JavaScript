const users=[
    { id:1, name:"Uwineza"},
     { id:2, name:"Gloria"},
     { id:4, name:"Joe"},
]
function getuser(id){
    if(typeof(id)!=='number' || id<=0){
        throw new Error("invalid id")
    }
    return new Promise((resolve,reject)=>{
for(let elem of users){
    if(id===elem.id){
        resolve({id:elem.id,name:elem.name})
    }
}
    })
}
getuser(0).then(data=>console.log(data)).catch(error=>console.log({catchedError:error}))

// program to use promise  to find if you exist when we found the user otherwise return not found
const users=[
{id:20,name:"gloria"},
{id:22,name:"uwineza"},
]
const getUsers=(userId)=>{
    return new Promise((reject,resolve)=>{
        setTimeout(()=>{
            const getUser=users.find(user=>user.id===userId)
            console.log(users)
            if(getUser){
                let name=""
               for(let user of users){
                if(user.id===userId){
                    name=user.name
                }
               } 
                resolve(`${name} already exist`)
            }
            else{
                reject("user not found")
            }
        },1000)
    })
}
getUsers(20)
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
/*Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId. The function should return a promise that resolves with the combined data.

- Users endpoints https://jsonplaceholder.typicode.com/users
- Todos endpoints https://jsonplaceholder.typicode.com/todos

The returned promise should resolve into an array of users, where each user object has a new key todos. This key shoul
// User object may look like
{
    id: 10,
  name: 'Clementina DuBuque',
  ...
}

// Todo object may look like
{
    userId: 5,
  completed: false,
    ...
}

// The result array will have objects that look like

{
    id: 10,
  name: 'Clementina DuBuque',
  todos: [
        {
            userId: 10,
          completed: false,
            ...
        },
        {
            userId: 10,
          completed: false,
            ...
        }
    ]
    ...
}*/
async function fetchUserTodos(){
    let result=[]

    
    let users=fetch(" https://jsonplaceholder.typicode.com/users")
    let todos=fetch("https://jsonplaceholder.typicode.com/todos")
    let [userResponse,todoResponse]=await Promise.all([users,todos])
    let userdata=await userResponse.json()
    let todoData=await todoResponse.json()
   for (let user of userdata){
 let arr=[]
    for(let todo of todoData){
        if(todo.userId===user.id){

             arr.push({
              "userId":todo.userId,
              "completed":todo.completed
            })
        }
}  
const obj={
    "id":user.id,
    "name":user.name,
    "todos":arr  
    }
   
    result.push(obj)
   }
return result

}
fetchUserTodos().then((user)=>console.log(JSON.stringify(user,null,2))) //null, 2 formats the output nicely
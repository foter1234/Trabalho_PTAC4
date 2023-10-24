'use server'


const url ="https://aula-17-10-chi.vercel.app"

const getUserAuthenticated = async (user)=>{
    
    const responseOfApi = await fetch(url + "/user/authenticated",
     {
        cache:"no-cache",
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify(user)
     }
    
    )
   let userAuth = await responseOfApi.json();
   return userAuth

}



const getUsers = async () =>{

    

    
    
}
export { getUsers, getUserAuthenticated };
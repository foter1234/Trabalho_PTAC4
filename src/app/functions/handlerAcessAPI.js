'use server'

const usuario = [
    {
    nome:"lucas",
    email:"lucaspesteves2017@gmail.com",
    password:"12345",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    
    {nome:"pedro",
    email:"pedropesteves2017@gmail.com",
    password:"123456",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {nome:"filipe",
    email:"filipepesteves2017@gmail.com",
    password:"1234567",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }]

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



const getUsers = () =>{

    
}
export { getUsers, getUserAuthenticated };
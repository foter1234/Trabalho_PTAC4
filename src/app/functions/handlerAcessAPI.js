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

const getUserAuthenticated = (user) => {
        

let userAuth = {}

     usuario.map((usuarios)=>{

     if (usuarios.email == user.email && usuarios.password == user.password) {
        userAuth = usuarios

     }

}

)

return userAuth

}

const getUsers = () =>{

    return usuario
    
}
export { getUsers, getUserAuthenticated };
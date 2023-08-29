export default async function ListUsers({user}) {
    
    await new Promise((resolve)=> setTimeout(resolve, 5000))
    return(
        <div>
             {user?.map((users, index)=>
             <p key={index}>{users.nome}</p>
             )}
        </div>
    )
    
}
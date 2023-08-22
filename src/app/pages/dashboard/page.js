//"use client"
import ListUsers from "@/app/components/ListUsers"
import { getUsers } from "@/app/functions/handlerAcessAPI";
//import { getUserAuthenticated } from "@/app/functions/handlerAcessAPI";
// import React, { useState, useEffect } from 'react';
import {Suspense} from 'react'


export default async function Dashboard() {

 
const usuarios = getUsers();

return (
    <div>
        <h1>Dashboard</h1>

        <Suspense fallback={<p>carregando...</p>}>
        
        <ListUsers users={users}/>

        {usuarios.map((usuario) => (
            <h1>{usuario.nome}</h1>
        ))}

</Suspense>
    </div>
);

    
};
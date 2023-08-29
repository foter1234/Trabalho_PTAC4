//"use client"
import ListUsers from "@/app/components/ListUsers"
import { getUsers } from "@/app/functions/handlerAcessAPI";
//import { getUserAuthenticated } from "@/app/functions/handlerAcessAPI";
// import React, { useState, useEffect } from 'react';
import {Suspense} from 'react'
import Link from 'next/link'



export default async function Dashboard() {

 
const usuarios = getUsers();
const users = getUsers();


return (
    <div>
        <h1>Dashboard</h1>

        <Suspense fallback={<p>carregando...</p>}>
        
        <ListUsers user={users}/>

        {usuarios.map((usuario) => (
            <h1>{usuario.nome}</h1>
        ))}

    <Link href="@/app/pages/alterar">Alterar</Link>
    <Link href="@/app/pages/register">registrar</Link>
</Suspense>
    </div>
);

    
};
//"use client"
import { getUsers } from "@/app/functions/handlerAcessAPI";
//import { getUserAuthenticated } from "@/app/functions/handlerAcessAPI";
// import React, { useState, useEffect } from 'react';
export default async function Dashboard() {

 
const usuarios = getUsers();

return (
    <div>
        <h1>Dashboard</h1>
    
        {usuarios.map((usuario) => (
            <h1>{usuarios.nome}</h1>
        ))}


    </div>
);

    
};
'use client'
import { useState } from "react";
import handlerAcessUser from "@/app/functions/handlerAcess"
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default  function alterar() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
       const userAuth = await handlerAcessUser(user)
       if (userAuth.token === undefined) {
       toast.error("erro no e-mail ou senha")
  }
      push('/pages/dashboard');
      localStorage.setItem('nome', userAuth.nome)

    } catch {
      toast.error("Erro na aplicação")
      refresh();
    }
  }


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
      </form>
      <a href='/'><button>Voltar</button></a>
      <ToastContainer/>
    </div>
  )
}


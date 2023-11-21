'use client'
import { useState } from "react";
import handlerAcessUser from "@/app/functions/handlerAcess"
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from "../alterar/style.module.css"
import { postUser } from "@/app/functions/handlerAcessAPI";

export default  function register() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const {push} =useRouter()
  const {refresh } = useRouter();

  const handlerFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await postUser(user)
      return push("/pages/dashboard")

    } catch {
      
      toast.error("Erro na aplicação")
      refresh();
    }

  }
  return (
    <div className={styles.Container}>
      
      <form onSubmit={handlerFormSubmit} className={styles.form}>
      <h1 className={styles.h1}>registrar</h1>

      <input
          placeholder='nome'
          type="nome"
          className={styles.input}
          onChange={(e) => { setUser({ ...user, nome: e.target.value }) }}>
        </input>

        <input
          placeholder='E-mail'
          type="email"
          className={styles.input}
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          className={styles.input}
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button  className={styles.button}>Registrar</button>
      </form>
      <a href='/' className={styles.link}><button  className={styles.voltar}>Voltar</button></a>
      <ToastContainer/>
    </div>
  )
}


'use client'
import { useState } from "react";
import handlerAcessUser from "@/app/functions/handlerAcess"
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from "../alterar/style.module.css"

export default  function register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const {refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {

      toast.success("registrado com sucesso")         
    
    } catch {
      toast.error("Erro na aplicação")
      refresh();
    }

  }
  return (
    <div className={styles.Container}>
      
      <form onSubmit={handlerLogin} className={styles.form}>
      <h1 className={styles.h1}>registrar</h1>
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


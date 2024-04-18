import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/login.module.css";
import axios from "axios";
import Button from "../src/components/button/button";
import LoginCard from "../src/components/loginCard/loginCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const schema = yup
  .object({
    
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: yup
      .string()
                                            
      .required("A senha é obrigatória")
   
  })
  .required();


  


export default function LoginPage() {

  const [loginError, setLoginError] = useState(false)
  
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 async function handleForm(userData) {
  console.log(userData)
  try {
    const response = await axios.post('/api/user/login', {
      email: userData.email,
      password: userData.password
    })

    router.push('/')
  } catch (error) {
    setLoginError(error.msg)
  }
 }

 

  return (
    <div className={styles.loginPage}>
      <LoginCard title={"Faça seu login"}>
        <form className={styles.form} onSubmit={handleSubmit(handleForm)}>

          <label className={styles.label}>
            e-mail
            <input type="text" {...register("email")}/>
            {<span> {errors.email?.message} </span>}
          </label>

          <label className={styles.label}>
            senha
            <input type="password" {...register("password")} />
            {<span> {errors.password?.message} </span>}
          </label>

          
          <Button> Entrar </Button>
        </form>
        <Link className={styles.link}  href={'/cadastro'}>Ainda nã possui conta?</Link>
      </LoginCard>
    </div>
  );
}
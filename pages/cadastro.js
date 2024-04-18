import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/cadastro.module.css";
import axios from 'axios';
import Button from "../src/components/button/button";
import LoginCard from "../src/components/loginCard/loginCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 digitos")                                       
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatória")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();

export default function CadastroPaged() {

  const router = useRouter()
  const [userError, setUserError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handlerForm(userData) {
    console.log(userData)
   try {
      const response = await axios.post('/api/user/cadastro',{
        name: userData.name,
        email: userData.email,
        password: userData.password
      })

        router.push('/login')

    } catch (error) {
      setUserError(error.msg)
    }
  }

   



  return (
    <div className={styles.cadastroPage}>
      <LoginCard title={"Crie sua conta"}>
    
        <form className={styles.form} onSubmit={handleSubmit(handlerForm)}>

          <label className={styles.label}>
            nome
            <input type="text"
              className={styles.input}
              {...register("name", { required: true })}
            />
            {<span> {errors.name?.message} </span>}
          </label>

          <label className={styles.label}>
            e-mail
            <input type="text" {...register("email")} />
            {<span> {errors.email?.message} </span>}
          </label>

          <label className={styles.label}>
            senha
            <input type="password" {...register("password")} />
            {<span> {errors.password?.message} </span>}
          </label>

          <label className={styles.label}>
            confirme sua senha
            <input type="password" {...register("confirmPassword")} />
            
          </label>

          <Button type='submit' > Cadastrar </Button>
          
        </form>
        
        <Link className={styles.link}  href={'/login'}>Login</Link>
      </LoginCard>
    </div>
  );
}



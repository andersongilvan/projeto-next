
import styles from '../styles/Home.module.css'
import connect from '../src/db/db.js'


const conexao = await connect()

conexao.on("error", (erro) => {
  console.error('Erro de conexão', erro)
})

conexao.once("open", () => {
  console.log("Conexão feita com sucesso!")
})

export default function Home() {
  return (
    <div>
      Perfil do usuario
    </div>
  )
}

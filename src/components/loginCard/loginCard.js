import styles from './styles.module.css'

export default function LoginCard({title, children}) {
    return(
        <div className={styles.loginCard} >
            <h3 className={styles.title}> {title} </h3>
               
                {children}
        </div>
    )
}
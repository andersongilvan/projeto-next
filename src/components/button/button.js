import styles from './styles.module.css'

export default function Button({children, ...props}) {
    return(
        <button className={styles.btn} {...props}>
            {children}
        </button>
    )
}
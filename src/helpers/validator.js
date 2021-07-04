import styles from './validator.module.css'

export const ValidationForm = (props) => {
    return <div className={styles.error}>{props.children}</div>
};
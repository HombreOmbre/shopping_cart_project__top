import styles from "../styles/ErrorPage.module.scss";

export const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <h1 className={styles.header}>Ooops!</h1>
            <p className={styles.errorTxt}>Something gone wrong...</p>
        </div>
    )
}
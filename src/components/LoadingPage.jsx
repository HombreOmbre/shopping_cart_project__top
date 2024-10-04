import styles from "../styles/LoadingPage.module.scss";

export const LoadingPage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.loadingTxt}>Loading...</p>
        </div>
    )
}
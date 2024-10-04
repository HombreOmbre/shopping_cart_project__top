import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext.jsx";
import "../styles/globals.scss";
import styles from "../styles/App.module.scss";
import { Outlet } from "react-router-dom";
import { LoadingPage } from "./LoadingPage.jsx";
import { ErrorPage } from "./ErrorPage.jsx";

export const App = () => {
    const { isError, isLoading } = useContext(ProductsContext);

    if (isError) return <ErrorPage />;

    return (
        <div className={styles.mainContainer}>
            <Header/>
            {
                !isLoading ?
                    <Outlet /> :
                    <LoadingPage />
            }
            <Footer/>
        </div>
    );
}
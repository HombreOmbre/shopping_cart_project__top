import { Link, NavLink } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import { useContext, useMemo } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext.jsx";

export const Header = () => {
    const { shoppingCart } = useContext(ShoppingCartContext)
    const productsAmount = useMemo(() => {
        return shoppingCart.reduce((acc, item) => acc += item.getProductAmount(), 0)
    },[shoppingCart]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.leftBox}>
                    <Link className={styles.link} to="/">
                        Shopperooo
                    </Link>
                </div>
                <div className={styles.rightBox}>
                    <nav className={styles.nav}>
                        <NavLink className={styles.link} to="/">Home Page</NavLink>
                        <NavLink className={styles.link} to="products">Products</NavLink>
                        <NavLink className={styles.link} to="checkout">
                            Checkout {" (" + productsAmount + ") "}
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}
import { useContext, useMemo } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext.jsx";
import styles from "../styles/AmountOfShoppingCart.module.scss";

export const AmountOfShoppingCart = () => {
    const { shoppingCart } = useContext(ShoppingCartContext);
    const amount = useMemo(() => {
        return shoppingCart.reduce((allPrice, product) => {
            return allPrice + product.getProductPrice();
        }, 0);
    },[shoppingCart]);

    return (
        <div className={styles.container}>
            <div className={styles.amountTitle}>
                Amount:
            </div>
            <div className={styles.amountValue}>
                ${amount.toFixed(2)}
            </div>
        </div>
    );
}
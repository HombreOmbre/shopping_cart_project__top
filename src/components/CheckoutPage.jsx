import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext.jsx";
import styles from "../styles/CheckoutPage.module.scss";
import { ShoppingCartItem } from "./ShoppingCartItem.jsx";

export const CheckoutPage = () => {
    const { shoppingCart } = useContext(ShoppingCartContext);
    return (
        <div className={styles.container}>

            {
                shoppingCart.length > 0 ? (
                    <>
                        <h2 className={styles.titleHeader}>Shopping cart</h2>
                        {
                            shoppingCart.map((product) => (
                                <ShoppingCartItem
                                    key={product.getId()}
                                    product={product}
                                />
                            ))
                        }

                    </>
                ) :
                <h2 className={styles.infoTxt}>There is no products in the shopping cart</h2>
            }
        </div>
    );
}
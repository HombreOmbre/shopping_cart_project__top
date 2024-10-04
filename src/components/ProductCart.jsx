import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/ProductCart.module.scss";
import { ShoppingCartContext } from "../context/ShoppingCartContext.jsx";

// TODO: add select for choosing amount of products to add to cart
export const ProductCart = () => {
    const product = useOutletContext();
    const { addProductsToCart } = useContext(ShoppingCartContext);
    let color;
    switch (true) {
        case (product.rating.rate <= 2):
            color = styles.redRate;
        break;
        case (product.rating.rate > 2 && product.rating.rate <= 3.9):
            color = styles.orangeRate;
        break;
        case (product.rating.rate > 4):
            color = styles.greenRate;
        break;
    }

    const handleBtnClick = () => {
        addProductsToCart(product.id, product.title, product.price, product.image);
    }

    return (
        <div className={styles.productContainer}>
            <div className={styles.leftSide}>
                <img className={styles.productImg} src={product.image} alt={product.title}/>
            </div>
            <div className={styles.rightSide}>
            <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.rating}>
                    Rating: <span className={color}> { product.rating.rate } </span> {"(" + product.rating.count + ")"}
                </p>
                <p className={styles.price}>${product.price}</p>
                <div className={styles.buyContainer}>
                    <button
                        className={styles.btn}
                        onClick={handleBtnClick}
                    >
                        Add to basket
                    </button>
                </div>
            </div>

        </div>
    );
}
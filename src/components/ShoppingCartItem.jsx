import PropTypes from "prop-types";
import { Product } from "../classes/Product.js";
import styles from "../styles/ShoppingCartItem.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext.jsx";

export const ShoppingCartItem = ({ product }) => {
    const { addProductsToCart, removeProductFromCart, deleteProductFromCart } = useContext(ShoppingCartContext);

    const handleRemoveBtnClick = () => {
        removeProductFromCart(product.getId());
    }

    const handleAddBtnClick = () => {
        addProductsToCart(product.getId(), product.getProductName(), product.getProductBasicPrice(), product.getProductImg(), 1);
    }

    const handleDeleteBtnClick = () => {
        deleteProductFromCart(product.getId());
    }

    return (
        <div className={styles.cartContainer}>
                <div className={styles.imgContainer}>
                    <Link to={"../products/" + product.getId()}>
                        <img className={styles.img} src={product.getProductImg()} alt={product.getProductName()}/>
                    </Link>
                </div>
            <div className={styles.productInfo}>
                <h3 className={styles.title}>{product.getProductName()}</h3>
                <div className={styles.productAmount}>
                    <button
                        className={styles.btn}
                        onClick={handleRemoveBtnClick}
                    >
                        -
                    </button>
                    <div className={styles.quantity}>
                        {product.getProductAmount()}
                    </div>
                    <button
                        className={styles.btn}
                        onClick={handleAddBtnClick}
                    >
                        +
                    </button>
                </div>
                <p className={styles.price}>${product.getProductPrice().toFixed(2)}</p>
                <button
                    className={styles.delBtn}
                    onClick={handleDeleteBtnClick}
                >
                    Delete product
                </button>
            </div>
        </div>
    );
}

ShoppingCartItem.propTypes = {
    product: PropTypes.shape(Product)
}
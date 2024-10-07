import { useContext, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/ProductCart.module.scss";
import { ShoppingCartContext } from "../context/ShoppingCartContext.jsx";
import Form from 'react-bootstrap/Form';

export const ProductCart = () => {
    const product = useOutletContext();
    const { addProductsToCart } = useContext(ShoppingCartContext);
    const selectVal = useRef("1");
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
        if (selectVal.current.value.length === 0) {
            return;
        }

        addProductsToCart(product.id, product.title, product.price, product.image, parseInt(selectVal.current.value));
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
                    <Form.Select
                        ref={selectVal}
                        aria-label="Product quantity"
                        className={styles.select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Form.Select>
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
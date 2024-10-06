import { UseProducts } from "../customHooks/UseProducts.jsx";
import { useState } from "react";
import { Product } from "../classes/Product.js";
import { ProductsContext } from "./ProductsContext.jsx";
import { ShoppingCartContext } from "./ShoppingCartContext.jsx";
import PropTypes from "prop-types";

export const MainProvider = ({ children }) => {
    const { products, error, loading } = UseProducts();
    const [shoppingCart, setShoppingCart] = useState([]);

    const addProduct = (id, name, price, imgLink) => {
        const indexOfProduct = shoppingCart.findIndex((product) => product.getId() === id );
        const tmpArr = [...shoppingCart];

        if (indexOfProduct === -1) {
            const product = new Product(id, name, parseInt(price), imgLink);
            tmpArr.push(product);
        } else {
            tmpArr[indexOfProduct].increaseProductPrice(parseInt(price));
            tmpArr[indexOfProduct].increaseProductAmount();
        }

        setShoppingCart(tmpArr);
    }

    const removeProduct = (id) => {
        const indexOfProduct = shoppingCart.findIndex((product) => product.getId() === id);
        const tmpArr = [...shoppingCart];

        if (indexOfProduct === -1) {
            return;
        }

        tmpArr[indexOfProduct].decreaseProductPrice(tmpArr[indexOfProduct].getProductBasicPrice());
        tmpArr[indexOfProduct].decreaseProductAmount();

        if (tmpArr[indexOfProduct].getProductAmount() === 0) {
            tmpArr.splice(indexOfProduct, 1);
        }

        setShoppingCart(tmpArr);
    }

    const deleteProduct = (id) => {
        const indexOfProduct = shoppingCart.findIndex((product) => product.getId() === id);
        const tmpArr = [...shoppingCart];

        if (indexOfProduct === -1) {
            return;
        }

        tmpArr.splice(indexOfProduct, 1);

        setShoppingCart(tmpArr);
    }

    return (
        <ProductsContext.Provider value={{
            products: products,
            isError: error,
            isLoading: loading
        }}>
            <ShoppingCartContext.Provider value={{
                shoppingCart: shoppingCart,
                addProductsToCart: addProduct,
                removeProductFromCart: removeProduct,
                deleteProductFromCart: deleteProduct,
            }}>
                {children}
            </ShoppingCartContext.Provider>
        </ProductsContext.Provider>
    )
}

MainProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
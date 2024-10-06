import { createContext } from "react";

const initialContext = {
    shoppingCart: [],
    addProductsToCart: () => {},
    removeProductFromCart: () => {},
    deleteProductFromCart: () => {},
};

export const ShoppingCartContext = createContext(initialContext);


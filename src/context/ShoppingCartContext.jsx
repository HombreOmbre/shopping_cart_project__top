import { createContext } from "react";

const initialContext = {
    shoppingCart: [],
    addProductsToCart: () => {},
    removeProductFromCart: () => {},
};

export const ShoppingCartContext = createContext(initialContext);


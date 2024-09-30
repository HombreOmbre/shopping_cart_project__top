import { createContext } from "react";

const initialContext = {
    products: [],
    isError: false,
    isLoading: true,
}

export const ProductsContext = createContext(initialContext);

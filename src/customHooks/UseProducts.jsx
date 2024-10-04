import { useState, useEffect } from 'react';

const fetchProducts = async (setProducts, setError, setLoading) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=15');

        if (!response.ok) {
            throw new Error(response.error);
        }

        const productsData = await response.json();

        setProducts(productsData);
        setError(false);
    } catch (error) {
        setError(error);
        setProducts([]);
    } finally {
        setLoading(false);
    }
}

export const UseProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(fetchProducts.bind(null, setProducts ,setError, setLoading), 3000)
    }, []);

    return { products, error, loading };
}
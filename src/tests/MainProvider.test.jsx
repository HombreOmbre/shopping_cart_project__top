import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import { MainProvider } from '../context/MainProvider.jsx';
import { ProductsContext } from '../context/ProductsContext.jsx';
import { ShoppingCartContext } from '../context/ShoppingCartContext.jsx';
import { describe, it, vi, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

vi.mock('../customHooks/UseProducts', () => ({
    UseProducts: () => ({
        products: [{ id: 1, name: "Test Product", price: 100 }],
        error: null,
        loading: false
    })
}));

describe('MainProvider', () => {
    it('provides products and shopping cart contexts', async () => {
        const TestComponent = () => {
            const { products, isLoading, isError } = React.useContext(ProductsContext);
            const { shoppingCart, addProductsToCart, removeProductFromCart } = React.useContext(ShoppingCartContext);

            return (
                <div>
                    <p>Products: {products.length}</p>
                    <p>Loading: {isLoading ? "Yes" : "No"}</p>
                    <p>Error: {isError || "None"}</p>
                    <p>Shopping Cart Items: {shoppingCart.length}</p>
                    <button onClick={() => addProductsToCart(1, "Test Product", 100)}>Add Product</button>
                    <button onClick={() => removeProductFromCart(1, 100)}>Remove Product</button>
                </div>
            );
        };

        render(
            <MainProvider>
                <TestComponent />
            </MainProvider>
        );

        expect(screen.getByText(/Products: 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Loading: No/i)).toBeInTheDocument();
        expect(screen.getByText(/Error: None/i)).toBeInTheDocument();
        expect(screen.getByText(/Shopping Cart Items: 0/i)).toBeInTheDocument();

        await userEvent.click(screen.getByText('Add Product'));
        await waitFor(() => {
            expect(screen.getByText(/Shopping Cart Items: 1/i)).toBeInTheDocument();
        });

        await userEvent.click(screen.getByText('Add Product'));
        await waitFor(() => {
            expect(screen.getByText(/Shopping Cart Items: 1/i)).toBeInTheDocument();
        });

        await userEvent.click(screen.getByText('Remove Product'));
        await waitFor(() => {
            expect(screen.getByText(/Shopping Cart Items: 1/i)).toBeInTheDocument();
        });

        await userEvent.click(screen.getByText('Remove Product'));
        await waitFor(() => {
            expect(screen.getByText(/Shopping Cart Items: 0/i)).toBeInTheDocument();
        });
    });
});

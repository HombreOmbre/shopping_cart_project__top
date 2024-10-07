import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartItem } from '../components/ShoppingCartItem';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { describe, it, vi, expect } from 'vitest';
import { Product } from '../classes/Product';

const mockProduct = new Product(1, 'Test Product', 100, "1", 'test-product.jpg', 1);
const mockAddProduct = vi.fn();
const mockRemoveProduct = vi.fn();

const renderComponent = (product = mockProduct) => {
    return render(
        <BrowserRouter>
            <ShoppingCartContext.Provider
                value={{
                    addProductsToCart: mockAddProduct,
                    removeProductFromCart: mockRemoveProduct,
                }}
            >
                <ShoppingCartItem product={product} />
            </ShoppingCartContext.Provider>
        </BrowserRouter>
    );
};

describe('ShoppingCartItem Component', () => {

    it('renders the product name, amount, price, and image', () => {
        renderComponent();

        expect(screen.getByText(mockProduct.getProductName())).toBeInTheDocument();
        const productImg = screen.getByAltText(mockProduct.getProductName());
        expect(productImg).toBeInTheDocument();
        expect(productImg).toHaveAttribute('src', mockProduct.getProductImg());
        expect(screen.getByText(mockProduct.getProductAmount().toString())).toBeInTheDocument();
        expect(screen.getByText(`$${mockProduct.getProductPrice()}`)).toBeInTheDocument();
    });

    it('calls removeProductFromCart when "-" button is clicked', () => {
        renderComponent();

        const removeButton = screen.getByText('-');
        fireEvent.click(removeButton);
        expect(mockRemoveProduct).toHaveBeenCalledWith(mockProduct.getId());
    });

    it('calls addProductsToCart when "+" button is clicked', () => {
        renderComponent();

        const addButton = screen.getByText('+');
        fireEvent.click(addButton);

        expect(mockAddProduct).toHaveBeenCalledWith(
            mockProduct.getId(),
            mockProduct.getProductName(),
            mockProduct.getProductBasicPrice(),
            mockProduct.getProductImg(),
            1
        );
    });

    it('navigates to the product page when the image is clicked', () => {
        renderComponent();

        const productLink = screen.getByRole('link');
        expect(productLink).toHaveAttribute('href', `/products/${mockProduct.getId()}`);
    });
});

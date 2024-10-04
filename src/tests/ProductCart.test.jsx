import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProductCart } from '../components/ProductCart';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import '@testing-library/jest-dom';
import { useOutletContext } from 'react-router-dom'; // Mock this

vi.mock('react-router-dom', async () => ({
    ...(await vi.importActual('react-router-dom')),
    useOutletContext: vi.fn(),
}));

// Mock Product Data
const mockProduct = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    rating: {
        rate: 4.5,
        count: 200,
    },
};

const renderWithContext = (product = mockProduct, addProductsToCart = vi.fn()) => {
    useOutletContext.mockReturnValue(product);

    return render(
        <ShoppingCartContext.Provider value={{ addProductsToCart }}>
            <ProductCart />
        </ShoppingCartContext.Provider>
    );
};

describe('ProductCart Component', () => {
    it('renders product details correctly', () => {
        renderWithContext();

        const productImg = screen.getByAltText(mockProduct.title);
        expect(productImg).toBeInTheDocument();
        expect(productImg).toHaveAttribute('src', mockProduct.image);

        expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

        expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

        expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();

        const ratingLabel = screen.getByText(/rating:/i);
        expect(ratingLabel).toBeInTheDocument();

        const ratingValue = screen.getByText('4.5');
        expect(ratingValue).toBeInTheDocument();

        const ratingCount = screen.getByText(/(200)/i);
        expect(ratingCount).toBeInTheDocument();
    });

    it('applies correct color class based on rating', () => {
        let product = { ...mockProduct, rating: { rate: 4.5, count: 200 } };
        renderWithContext(product);
        expect(screen.getByText(`${product.rating.rate}`)).toHaveClass(/greenRate/);

        product = { ...mockProduct, rating: { rate: 3.5, count: 100 } };
        renderWithContext(product);
        expect(screen.getByText(`${product.rating.rate}`)).toHaveClass(/orangeRate/);

        product = { ...mockProduct, rating: { rate: 1.5, count: 50 } };
        renderWithContext(product);
        expect(screen.getByText(`${product.rating.rate}`)).toHaveClass(/redRate/);
    });

    it('calls addProductsToCart when the add to basket button is clicked', () => {
        const addProductsToCartMock = vi.fn();
        renderWithContext(mockProduct, addProductsToCartMock);

        const addButton = screen.getByRole('button', { name: /add to basket/i });
        expect(addButton).toBeInTheDocument();

        fireEvent.click(addButton);

        expect(addProductsToCartMock).toHaveBeenCalledTimes(1);
        expect(addProductsToCartMock).toHaveBeenCalledWith(
            mockProduct.id,
            mockProduct.title,
            mockProduct.price,
            mockProduct.image
        );
    });
});

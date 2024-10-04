import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ProductItem } from '../components/ProductItem';
import '@testing-library/jest-dom';

const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 99.99,
    description: 'This is a test product',
    category: 'electronics',
    image: 'https://via.placeholder.com/150',
    rating: {
        rate: 4.5,
        count: 100,
    },
};

const renderComponent = (product = mockProduct) => {
    return render(
        <BrowserRouter>
            <ProductItem product={product} />
        </BrowserRouter>
    );
};

describe('ProductItem Component', () => {
    it('renders the product details correctly', () => {
        renderComponent();

        expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

        expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();

        expect(screen.getByText(`${mockProduct.rating.rate}`)).toBeInTheDocument();

        const productImg = screen.getByAltText(mockProduct.title);
        expect(productImg).toBeInTheDocument();
        expect(productImg).toHaveAttribute('src', mockProduct.image);

        expect(screen.getByText(/free delivery/i)).toBeInTheDocument();
    });

    it('applies correct color class based on rating', () => {
        let product = { ...mockProduct, rating: { rate: 4.5, count: 100 } };
        renderComponent(product);
        expect(screen.getByText(`${product.rating.rate}`)).toHaveClass(/greenRate/);

        product = { ...mockProduct, rating: { rate: 3.5, count: 50 } };
        renderComponent(product);
        expect(screen.getByText(`${product.rating.rate}`)).toHaveClass(/orangeRate/);

        product = { ...mockProduct, rating: { rate: 1.5, count: 20 } };
        renderComponent(product);
        expect(screen.getByText(`${product.rating.rate}`)).toHaveClass(/redRate/);
    });

    it('renders the correct link to the product details', () => {
        renderComponent();

        const productLink = screen.getByRole('link');
        expect(productLink).toHaveAttribute('href', `/${mockProduct.id}`);
    });

    it('matches snapshot', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AmountOfShoppingCart } from "../components/AmountOfShoppingCart";
import { ShoppingCartContext } from "../context/ShoppingCartContext.jsx";

vi.mock("../styles/AmountOfShoppingCart.module.scss", () => ({
    default: {},
    container: "container",
    amountTitle: "amountTitle",
    amountValue: "amountValue",
}));

describe("AmountOfShoppingCart", () => {
    it("renders with no products in the shopping cart and shows 0.00", () => {
        const mockContextValue = { shoppingCart: [] };

        render(
            <ShoppingCartContext.Provider value={mockContextValue}>
                <AmountOfShoppingCart />
            </ShoppingCartContext.Provider>
        );

        expect(screen.getByText(/Amount:/)).toBeInTheDocument();
        expect(screen.getByText("$0.00")).toBeInTheDocument();
    });

    it("calculates the total amount with products in the shopping cart", () => {
        const mockContextValue = {
            shoppingCart: [
                { getProductPrice: () => 10.5 },
                { getProductPrice: () => 20.75 },
                { getProductPrice: () => 5.99 },
            ],
        };

        render(
            <ShoppingCartContext.Provider value={mockContextValue}>
                <AmountOfShoppingCart />
            </ShoppingCartContext.Provider>
        );

        expect(screen.getByText("$37.24")).toBeInTheDocument();
    });

    it("rounds the amount to two decimal places", () => {
        const mockContextValue = {
            shoppingCart: [
                { getProductPrice: () => 10.499 },
                { getProductPrice: () => 20.755 },
            ],
        };

        render(
            <ShoppingCartContext.Provider value={mockContextValue}>
                <AmountOfShoppingCart />
            </ShoppingCartContext.Provider>
        );

        expect(screen.getByText("$31.25")).toBeInTheDocument();
    });
});

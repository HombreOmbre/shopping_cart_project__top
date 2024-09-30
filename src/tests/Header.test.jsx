import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { describe, it, expect } from "vitest";

describe('Header Component', () => {
    it('Header renders correctly and matches snapshot', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
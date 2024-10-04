import { render, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import { LoadingPage } from "../components/LoadingPage.jsx";
import "@testing-library/jest-dom";

describe("LoadingPage component", () => {
    it("Renders without crashing", () => {
        render(<LoadingPage />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it("Matches snapshot", () => {
        const { asFragment } = render(<LoadingPage />);

        expect(asFragment).toMatchSnapshot();
    });
});
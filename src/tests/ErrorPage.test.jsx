import { expect, describe, it } from "vitest";
import { render, screen } from '@testing-library/react';
import { ErrorPage } from "../components/ErrorPage.jsx";

describe("ErrorPage", () => {
    it("renders without crashing", () => {
        render(<ErrorPage />);

        expect(screen.getByText("Ooops!")).toBeInTheDocument();
        expect(screen.getByText("Something gone wrong...")).toBeInTheDocument();
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<ErrorPage />);

        expect(asFragment()).toMatchSnapshot();
    })
})

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { ComponentCTA } from '../components/ComponentCTA';
import '@testing-library/jest-dom';

describe('ComponentCTA', () => {
    it('renders the CTA form with the initial state', () => {
        render(<ComponentCTA />);

        expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
        expect(screen.getByText('Stay in touch')).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum dolor/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument();
    });

    it('shows error message when email is empty', async () => {
        render(<ComponentCTA />);

        await userEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

        expect(await screen.findByText(/Email is invalid/i)).toBeInTheDocument();
    });

    it('shows error message when email is invalid', async () => {
        render(<ComponentCTA />);

        await userEvent.type(screen.getByPlaceholderText('Enter your email'), 'invalid-email');
        await userEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

        expect(await screen.findByText(/Email is invalid/i)).toBeInTheDocument();
    });

    it('shows success message when a valid email is entered', async () => {
        render(<ComponentCTA />);

        await userEvent.type(screen.getByPlaceholderText('Enter your email'), 'test@example.com');
        await userEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

        expect(await screen.findByText(/Thank You for subscribe!/i)).toBeInTheDocument();
    });

    it('hides error message when a valid email is entered', async () => {
        render(<ComponentCTA />);

        await userEvent.type(screen.getByPlaceholderText('Enter your email'), 'invalid-email');
        await userEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

        expect(await screen.findByText(/Email is invalid/i)).toBeInTheDocument();

        await userEvent.clear(screen.getByPlaceholderText('Enter your email'));
        await userEvent.type(screen.getByPlaceholderText('Enter your email'), 'test@example.com');
        await userEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

        expect(await screen.queryByText(/Email is invalid/i)).not.toBeInTheDocument();
        expect(await screen.findByText(/Thank You for subscribe!/i)).toBeInTheDocument();
    });
});

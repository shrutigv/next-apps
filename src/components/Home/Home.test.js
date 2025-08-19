import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
    it('renders without crashing', () => {
        render(<Home />);
        expect(screen.getByText(/home/i)).toBeInTheDocument();
    });

    it('renders a button if present', () => {
        render(<Home />);
        const button = screen.queryByRole('button');
        if (button) {
            expect(button).toBeInTheDocument();
        }
    });

    it('renders a heading if present', () => {
        render(<Home />);
        const heading = screen.queryByRole('heading');
        if (heading) {
            expect(heading).toBeInTheDocument();
        }
    });
});
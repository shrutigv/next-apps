import React from 'react';
import { render, screen } from '@testing-library/react';
import Maps from './Maps';

test('renders Maps component', () => {
    render(<Maps />);
    const linkElement = screen.getByText(/maps/i);
    expect(linkElement).toBeInTheDocument();
});
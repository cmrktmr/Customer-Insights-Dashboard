import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Component', () => {
    it('should render correctly', () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );
        expect(screen.getByText(/404/i)).toBeInTheDocument();
        expect(screen.getByText(/Oops! We can't seem to find the page you're looking for./i)).toBeInTheDocument();
    });

    it('should contain a go Dashboard button', () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );
        const goDashboardButton = screen.getByRole('button', { name: /go Dashboard/i });
        expect(goDashboardButton).toBeInTheDocument();
    });
});

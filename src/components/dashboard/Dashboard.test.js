import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './Dashboard';

jest.mock('../../hooks/useFetchData', () => ({
    useFetchData: jest.fn()
}));

describe('Dashboard Component', () => {

    it('displays an error message when there is an error', async () => {
        require('../../hooks/useFetchData').useFetchData.mockImplementation(() => ({
            data: null,
            loading: false,
            error: 'Test error'
        }));

        render(<Dashboard />);
        await waitFor(() => expect(screen.getByText('Error: Test error')).toBeInTheDocument());
    });
});

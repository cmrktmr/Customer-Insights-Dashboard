import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MostSellingChannelWidget from './MostSellingChannelWidget';

const mockData = [
    { "sales_id": 1, "sales_date": "12/19/2022", "product_name": "Product B", "quantity_sold": 205, "unit_price": 37.21, "total_revenue": 75.27, "sales_channel": "Social Media" },
    { "sales_id": 2, "sales_date": "5/22/2022", "product_name": "Product E", "quantity_sold": 100, "unit_price": 99.07, "total_revenue": 58.08, "sales_channel": "Social Media" },
];

describe('MostSellingChannel Component', () => {
    it('displays the most selling channel correctly', () => {
        render(<MostSellingChannelWidget data={mockData} />);
        expect(screen.getByText(/Most Selling Channel/i)).toBeInTheDocument();
        expect(screen.getByText('Social Media with 305 units')).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BestSellingProductWidget from './BestSellingProductWidget';

const mockData = [
    { "sales_id": 1, "sales_date": "12/19/2022", "product_name": "Product B", "quantity_sold": 205, "unit_price": 37.21, "total_revenue": 75.27, "sales_channel": "Social Media" },
    { "sales_id": 2, "sales_date": "5/22/2022", "product_name": "Product E", "quantity_sold": 126, "unit_price": 99.07, "total_revenue": 58.08, "sales_channel": "Social Media" },
    { "sales_id": 3, "sales_date": "1/10/2024", "product_name": "Product G", "quantity_sold": 832, "unit_price": 95.56, "total_revenue": 68.25, "sales_channel": "Web Site" },
];

describe('BestSellingProductWidget Component', () => {
    it('displays the best selling product correctly', () => {
        render(<BestSellingProductWidget data={mockData} />);
        expect(screen.getByText(/Best Selling Product/i)).toBeInTheDocument();
        expect(screen.getByText('Product G: 832 units')).toBeInTheDocument();
    });
});

import React from 'react';
import { Card } from 'react-bootstrap';

const TotalRevenueWidget = ({ data }) => {
    const totalRevenue = data.reduce((sum, item) => sum + item.total_revenue, 0).toFixed(2);
    return (
        <Card className='mb-4' aria-label="Total Revenue Information">
            <Card.Body>
                <Card.Title>Total Revenue</Card.Title>
                <Card.Text>${totalRevenue}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TotalRevenueWidget;

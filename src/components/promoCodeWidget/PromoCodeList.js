import React from 'react';
import { Card, ListGroup, Alert } from 'react-bootstrap';

const PromoCodeList = ({ promoCodes }) => {
    return (
        <Card className="mb-4 shadow">
            <Card.Body>
                <Card.Title>Generated Promo Codes</Card.Title>
                {promoCodes.length > 0 ? (
                    <ListGroup variant="flush">
                        {promoCodes.map((code, index) => (
                            <ListGroup.Item key={index}>
                                Code: {code.promoCode}, Description: {code.description}, Discount: ${code.discount}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                ) : (
                    <Alert variant="info">No promo codes have been created yet.</Alert>
                )}
            </Card.Body>
        </Card>
    );
};

export default PromoCodeList;

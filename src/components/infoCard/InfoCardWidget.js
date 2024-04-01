import React from 'react';
import { Card } from 'react-bootstrap';

const InfoCardWidget = ({ title, name, total }) => {
    return (
        <Card className='mb-4' aria-label={`${title} Information`}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{name} with {total} units</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default InfoCardWidget;

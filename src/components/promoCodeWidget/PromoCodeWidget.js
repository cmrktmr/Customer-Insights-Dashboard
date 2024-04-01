import React, { useState, useEffect } from 'react';
import PromoCodeForm from './PromoCodeForm';
import PromoCodeList from './PromoCodeList';
import { Col } from 'react-bootstrap';

const PromoCodeWidget = () => {
    const [promoCodes, setPromoCodes] = useState([]);

    useEffect(() => {
        const storedPromoCodes = JSON.parse(localStorage.getItem('promoCodes')) || [];
        setPromoCodes(storedPromoCodes);
    }, []);

    useEffect(() => {
        localStorage.setItem('promoCodes', JSON.stringify(promoCodes));
    }, [promoCodes]);

    const addPromoCode = (newPromoCode) => {
        setPromoCodes(prevPromoCodes => [...prevPromoCodes, newPromoCode]);
    };

    return (
        <>
            <Col md={6}>
                <PromoCodeForm addPromoCode={addPromoCode} />
            </Col>

            <Col md={6}>
                <PromoCodeList promoCodes={promoCodes} />
            </Col>
        </>

    );
};

export default PromoCodeWidget;

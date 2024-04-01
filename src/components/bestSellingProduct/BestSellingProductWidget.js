import React from 'react';
import { calculateBestSeller } from '../../utils/calculateBestSeller';
import InfoCardWidget from '../infoCard/InfoCardWidget';

const BestSellingProductWidget = ({ data }) => {
    const bestSellingProduct = calculateBestSeller(data, 'product_name');

    return (
        <InfoCardWidget
            title="Best Selling Product"
            name={bestSellingProduct.name}
            total={bestSellingProduct.total}
        />
    );
};

export default BestSellingProductWidget;

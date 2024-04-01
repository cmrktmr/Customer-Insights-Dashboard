import React from 'react';
import { calculateBestSeller } from '../../utils/calculateBestSeller';
import InfoCardWidget from '../infoCard/InfoCardWidget';

const MostSellingChannel = ({ data }) => {
    const mostSellingChannel = calculateBestSeller(data, 'sales_channel');

    return (
        <InfoCardWidget
            title="Most Selling Channel"
            name={mostSellingChannel.name}
            total={mostSellingChannel.total}
        />
    );
};

export default MostSellingChannel;

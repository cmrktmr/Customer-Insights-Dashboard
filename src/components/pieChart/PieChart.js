import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const productSales = data.reduce((acc, item) => {
        if (acc[item.product_name]) {
            acc[item.product_name] += item.quantity_sold;
        } else {
            acc[item.product_name] = item.quantity_sold;
        }
        return acc;
    }, {});

    const backgroundColor = data.map(() =>
        `rgba(${Math.floor(Math.random() * 255)},
         ${Math.floor(Math.random() * 255)}, 
         ${Math.floor(Math.random() * 255)}, 0.5)`);

    const chartData = {
        labels: Object.keys(productSales),
        datasets: [
            {
                label: 'Total Quantity Sold',
                data: Object.values(productSales),
                backgroundColor,
                borderWidth: 1,
            },
        ],
    };

    return <>
        <h4>Product Sales Chart</h4>
        <Pie data={chartData} />
    </>
        ;
};

export default PieChart;

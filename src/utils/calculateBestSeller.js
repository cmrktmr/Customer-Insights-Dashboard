export const calculateBestSeller = (data, key) => {
    const totals = data.reduce((acc, item) => {
        const name = item[key];
        acc[name] = (acc[name] || 0) + item.quantity_sold;
        return acc;
    }, {});

    const bestSeller = Object.keys(totals).reduce((a, b) => totals[a] > totals[b] ? a : b);
    return { name: bestSeller, total: totals[bestSeller] };
};

import React, { useState, useMemo } from 'react';
import { Table } from 'react-bootstrap';
import { paginateData } from '../../utils/paginationHelper.js';
import PaginationComponent from '../paginatedData/paginationWidget';

const PaginatedTable = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const currentItems = useMemo(() => paginateData(data, currentPage, itemsPerPage), [data, currentPage, itemsPerPage]);


    return (
        <>
            <h4>Product Sales Insights</h4>
            <Table striped bordered hover size="sm" aria-label="Product Information Table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Product</th>
                        <th>Quantity Sold</th>
                        <th>Unit Price</th>
                        <th>Total Revenue</th>
                        <th>Sales Channel</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.sales_id}</td>
                            <td>{item.sales_date}</td>
                            <td>{item.product_name}</td>
                            <td>{item.quantity_sold}</td>
                            <td>${item.unit_price.toFixed(2)}</td>
                            <td>${item.total_revenue.toFixed(2)}</td>
                            <td>{item.sales_channel}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <PaginationComponent
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    );
};

export default React.memo(PaginatedTable);

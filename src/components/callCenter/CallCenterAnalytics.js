

import React, { useState, useMemo,useCallback } from 'react';
import PaginationComponent from '../paginatedData/paginationWidget';
import { Accordion } from 'react-bootstrap';
import { paginateData } from '../../utils/paginationHelper.js';

const CallCenterAnalytics = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const currentItems = useMemo(() => paginateData(data, currentPage, itemsPerPage), [data, currentPage, itemsPerPage]);
    const paginate = useCallback(pageNumber => setCurrentPage(pageNumber), []);

    return (
        <>
            <h4 className='mt-2'>Call Center Analytics</h4>
            <Accordion defaultActiveKey="0">
                {currentItems.map((product, index) => (
                    <Accordion.Item eventKey={String(index)} key={product.sales_id}>
                        <Accordion.Header>Sales ID: {product.sales_id}</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Total Calls: {product.total_calls}</li>
                                <li>Average Call Duration: {product.averageCall_duration} min</li>
                                <li>Resolution Rate: %{product.resolution_rate}</li>
                                <li>Customer Satisfaction Rate: %{product.customerSatisfactionRate}</li>
                                <li>Average Waiting Time: {product.averageWaiting_time} min</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <PaginationComponent
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
};

export default CallCenterAnalytics;


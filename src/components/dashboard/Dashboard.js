import React, { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PaginatedTable from '../paginatedTable/PaginatedTable.js';
import PieChart from '../pieChart/PieChart.js';
import BestSellingProductWidget from '../bestSellingProduct/BestSellingProductWidget.js';
import TotalRevenueWidget from '../totalRevenue/TotalRevenueWidget.js';
import MostSellingChannel from '../mostSellingChannel/MostSellingChannelWidget.js';
import { useData } from '../../context/DataContext';
import PromoCodeWidget from '../promoCodeWidget/PromoCodeWidget.js';

const CallCenterAnalytics = React.lazy(() => import('../callCenter/CallCenterAnalytics.js'));

const Dashboard = () => {
    const { data, loading, error } = useData();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.toString()}</p>;

    return (
        <Container>
            <Row className="mt-4 mb-4">
                <Col xs={12} md={6} lg={4}>
                    <TotalRevenueWidget data={data} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <BestSellingProductWidget data={data} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <MostSellingChannel data={data} />
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col xs={12} md={6} lg={8}>
                    <PaginatedTable data={data} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <PieChart data={data} />
                </Col>
            </Row>
            <Row>
                <PromoCodeWidget />
            </Row>
            <Row>
                <Suspense fallback={<div>Loading Call Center Analytics...</div>}>
                    <CallCenterAnalytics data={data} />
                </Suspense>
            </Row>

        </Container>
    );
};

export default Dashboard;

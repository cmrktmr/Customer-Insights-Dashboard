import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate();

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
            <h1 className="display-1">404</h1>
            <p className="lead">Oops! We can't seem to find the page you're looking for.</p>
            <Button variant="primary" onClick={() => navigate('/')}>Go Dashboard</Button>
        </div>
    );
};

export default NotFound;

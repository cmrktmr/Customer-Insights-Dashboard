import { Navigate, Link } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { Container, Form, Button, Alert, Col, Row } from 'react-bootstrap';

export const Login = () => {
    const { login, user } = useAuth();
    const { handleSubmit, error, success, renderFormControl } = useForm({
        email: '',
        password: ''
    }, async (values) => {
        console.log('Login values:', values);
        await login(values.email, values.password);
    });

    if (user) {
        return <Navigate replace to="/dashboard" />;
    }
    return (
        <Container className='vh-100 mt-4'>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h2 className="text-center">login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        {renderFormControl({ name: "email", type: "email", placeholder: "Email Address", label: "Email Address", required: true })}
                        {renderFormControl({ name: "password", type: "password", placeholder: "Password", label: "Password", required: true })}

                        <Button className='text-center mt-2 w-100' variant="primary" type="submit">Login</Button>
                    </Form>

                    <div className="text-center mt-4">
                        <Link to="/register">Don’t have an account? Register</Link>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

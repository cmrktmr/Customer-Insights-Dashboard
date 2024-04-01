import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

const Register = () => {
    const { register } = useAuth();
    const { handleSubmit, error, success, renderFormControl } = useForm({
        name: '',
        email: '',
        password: '',
        phone: ''
    }, async (values) => {
        await register(values.name, values.email, values.password, values.phone);
        // navigate('/login'); 
    });

    return (
        <Container className='vh-100 mt-4'>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h2 className="text-center my-4">Register</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        {renderFormControl({ name: "name", type: "text", placeholder: "Full Name", required: true })}
                        {renderFormControl({ name: "email", type: "email", placeholder: "Email Address", required: true })}
                        {renderFormControl({ name: "password", type: "password", placeholder: "Password", required: true })}
                        {renderFormControl({
                            name: "phone", type: "tel", placeholder: "Phone Number", pattern: "^[0-9]*$", minLength: 10, maxLength: 15, required: true
                        })}

                        <Button variant="primary" type="submit" className="w-100 mt-4">Register</Button>
                    </Form>
                    <div className="text-center mt-4">
                        <Link to="/login">Already have a account? Login</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;

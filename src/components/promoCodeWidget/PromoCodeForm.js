import React from 'react';
import { Card, Button, Alert, Form } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';

const PromoCodeForm = ({ addPromoCode }) => {
    const initialValues = { promoCode: '', description: '', discount: '' };

    const onSubmit = (values) => {
        addPromoCode({
            promoCode: values.promoCode,
            description: values.description,
            discount: Number(values.discount)
        });
        return 'Promo code successfully added!';

    };

    const { handleSubmit, error, success, renderFormControl } = useForm(initialValues, onSubmit);

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Create New Promo Code</Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    {renderFormControl({
                        name: "promoCode",
                        type: "text",
                        placeholder: "Promo Code",
                        label: "Promo Code",
                        required: true
                    })}
                    {renderFormControl({
                        name: "description",
                        type: "text",
                        placeholder: "Description",
                        label: "Description",
                        required: true
                    })}
                    {renderFormControl({
                        name: "discount",
                        type: "number",
                        placeholder: "Discount",
                        label: "Discount",
                        required: true
                    })}
                    <Button type="submit" className="mt-2">Add Promo Code</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default PromoCodeForm;

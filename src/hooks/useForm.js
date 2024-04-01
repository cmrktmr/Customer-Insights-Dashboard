import { useState } from 'react';
import { Form } from 'react-bootstrap';

export const useForm = (initialValues, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const successMessage = await onSubmit(values);
            setSuccess(successMessage || 'Operation successful.');
            setValues(initialValues);
        } catch (error) {
            setError(error.message);
        }
    };



    const renderFormControl = ({ name, type = "text", placeholder, as = "input", required = false, label, pattern }) => (
        <Form.Group controlId={"form" + name.charAt(0).toUpperCase() + name.slice(1)}>
            <Form.Label>{placeholder}</Form.Label>
            <Form.Control
                className='mb-2 mt-2'
                as={as}
                type={type}
                name={name}
                placeholder={placeholder}
                value={values[name] || ''}
                onChange={handleChange}
                aria-label={label || placeholder}
                required={required}
                pattern={pattern}
            />

        </Form.Group >
    );



    return { handleSubmit, error, success, renderFormControl };
};

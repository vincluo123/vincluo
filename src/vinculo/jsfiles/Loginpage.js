import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../cssfiles/login.css';


const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
    };

    return (
        <div className="background-image">
            <Container className="signup-container">
                <h3>Register here</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className='input'
                            type="email"
                            placeholder="First Name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className='input'
                            type="email"
                            placeholder="Last Name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className='input'
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            className='input'
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control
                            className='input'
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button className="Button" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default SignupPage;


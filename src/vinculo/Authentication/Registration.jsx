import React, { useState } from 'react';
import "./Registration.css"


function RegistrationPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add code to handle form submission, like sending data to a server
        console.log('Form Submitted:', formData);
        // Reset form fields after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className='form'>
      
            <form onSubmit={handleSubmit}>
                <h3>Register Here</h3>
                <input type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder='First Name'
                    onChange={handleChange}
                    required
                />
                <br />

                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder='Last Name'
                    onChange={handleChange}
                    required
                />
                <br />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder='Email'
                    onChange={handleChange}
                    required
                />

                <br />
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder='ConfirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;

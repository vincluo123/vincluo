import React from 'react';
import '../cssfiles/FormComponent.css';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameError: '',
            emailError: '',
            passError: '',
            repassError: ''
        };
    }

    validname = () => {
        let unname = document.getElementById('Uname').value;
        if (unname.length === 0) {
            this.setState({ nameError: 'Name is required' });
            return false;
        }
        if (!unname.match(/^[A-Za-z ]+$/)) {
            this.setState({ nameError: 'Full name is required' });
            return false;
        }
        this.setState({ nameError: '' });
        return true;
    };

    validemail = () => {
        let email = document.getElementById('email').value;
        if (email.length === 0) {
            this.setState({ emailError: 'Email address is required' });
            return false;
        }
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            this.setState({ emailError: 'Valid email address is required' });
            return false;
        }
        this.setState({ emailError: '' });
        return true;
    };

    validpassword = () => {
        let cr_pass = document.getElementById('cr_pass').value;
        if (cr_pass.length === 0) {
            this.setState({ passError: 'Password is required' });
            return false;
        }
        if (!cr_pass.match(/[A-Z]/g)) {
            this.setState({ passError: 'Password must have at least 1 uppercase letter' });
            return false;
        }
        if (!cr_pass.match(/[a-z]/g)) {
            this.setState({ passError: 'Password must have at least 1 lowercase letter' });
            return false;
        }
        if (!cr_pass.match(/[0-9]/g)) {
            this.setState({ passError: 'Password must have at least 1 digit' });
            return false;
        }
        if (cr_pass.length < 8) {
            this.setState({ passError: 'Password must have at least 8 characters' });
            return false;
        }
        this.setState({ passError: '' });
        return true;
    };

    valid_repassword = () => {
        let cr_pass = document.getElementById('cr_pass').value;
        let con_pass = document.getElementById('con_pass').value;

        if (con_pass.length === 0) {
            this.setState({ repassError: 'Re-enter password' });
            return false;
        }
        if (con_pass !== cr_pass) {
            this.setState({ repassError: 'Passwords do not match' });
            return false;
        }
        this.setState({ repassError: '' });
        return true;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validname() && this.validemail() && this.validpassword() && this.valid_repassword()) {
            alert("Form Submitted Successfully");
        }
    };

    render() {
        return (
            <div className="container">
                <div className="box">
                    <header className="form-header">
                        <h2>Signup</h2>
                    </header>
                    <main className="form-body">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="Uname">Username :</label>
                                <input type="text" id="Uname" placeholder="Enter the name" autoComplete="off" />
                                <span>{this.state.nameError}</span>
                                <i id="_001"></i>
                            </div>
                            <div>
                                <label htmlFor="email">Email address :</label>
                                <input type="email" id="email" placeholder="Enter the email" autoComplete="off" />
                                <span>{this.state.emailError}</span>
                                <i id="_002"></i>
                            </div>
                            <div>
                                <label htmlFor="cr_pass">Create password :</label>
                                <input type="password" id="cr_pass" placeholder="Enter the password" autoComplete="off" />
                                <span>{this.state.passError}</span>
                                <i id="_003"></i>
                            </div>
                            <div>
                                <label htmlFor="con_pass">Confirm password :</label>
                                <input type="password" id="con_pass" placeholder="Confirm the password" autoComplete="off" />
                                <span>{this.state.repassError}</span>
                                <i id="_004"></i>
                            </div>
                            <div>
                                <input type="submit" value="Submit" id="submitBtn" />
                            </div>
                        </form>
                    </main>
                    <footer className="form-footer">
                        <p>Already have an account? <a href="#">Login</a></p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default FormComponent;







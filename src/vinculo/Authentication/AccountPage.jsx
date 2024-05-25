import React from 'react';
import './AccountPage.css';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaBox, FaUser, FaBell, FaQuestionCircle, FaCog, FaStar, FaHeart, FaSignOutAlt, FaShoppingBasket } from 'react-icons/fa';

const Navigation = () => {
    return (
        <div className="side-navbar">
            <ul className='navigation'>
                <li>
                    <Link to="/home">
                        <FaHome style={{ color: '#234e70' }} /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <FaShoppingCart style={{ color: '#234e70' }} /> Orders
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <FaBox style={{ color: '#234e70' }} /> Products
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <FaUser style={{ color: '#234e70' }} /> Profile
                    </Link>
                </li>
                <li>
                    <Link to="/wishlist">
                        <FaHeart style={{ color: '#234e70' }} /> Wishlist
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <FaShoppingBasket style={{ color: '#234e70' }} /> My Cart
                    </Link>
                </li>
                <li>
                    <Link to="/faq">
                        <FaQuestionCircle style={{ color: '#234e70' }} /> FAQ
                    </Link>
                </li>
                <li>
                    <Link to="/logout">
                        <FaSignOutAlt style={{ color: '#234e70' }} /> Logout
                    </Link>
                </li>
            </ul>
            {/* <div className="setting">
                <Link to="/settings">
                    <FaCog className='setting-icon' /> Settings
                </Link>
            </div> */}
        </div>
    );
}

const Profile = () => {
    return (
        <div className="profile-details">
            <div className="profile-image">
                <img src="./assets/profile.png" alt="Profile" />
                <h2 className='username'>James</h2>
            </div>
            <h2>Contact Details</h2>
            <div className='details'>
                <h3>Name :</h3>
                <p>James</p>
            </div>
            <div className='details'>
                <h3>Email :</h3>
                <p>james123@gmail.com</p>
            </div>
            <div className='details'>
                <h3>Phone Number :</h3>
                <p>+91 9874563210</p>
            </div>
            <div className='details'>
                <h3>Address:</h3>
                <p>36, Brown Drive, Lake Street, CBE</p>
            </div>
            <div className='details'>
                <h3>Marketing:</h3>
                <p>Segment</p>
            </div>
            <div>
                <h4 className='tagheader'>Tags</h4>
                <div className="tags">
                    <p>VIP <span>X</span></p>
                    <p>Power Buyer <span>X</span></p>
                </div>
            </div>
        </div>
    );
}

const Section = () => {
    return (
        <div className="review-section">
            <h3><FaStar /> My Reviews</h3>
            <p>Rate and review your recent purchases and manage reviews you've submitted</p>
            <p><Link to="/orders">Review recent purchases</Link></p>
        </div>
    );
}

const ProfileSection = () => {
    return (
        <div className='review-section'>
            <h3><FaUser style={{ color: '#234e70' }} /> My Details</h3>
            <p>Update your personal details, passwords & Manage your payment cards</p>
            <p><Link to="#">Edit My Details</Link></p>
            <p><Link to="#">Edit Address</Link></p>
        </div>
    );
}

const ContactSection = () => {
    return (
        <div className='review-section'>
            <h3><FaUser style={{ color: '#234e70' }} /> Contact Us</h3>
            <p>See the status of any queries you've raised with the customer service team</p>
            <p><Link to="#">Call Us</Link></p>
            <p><Link to="#">Chat with Us</Link></p>
        </div>
    );
}

const Notification = () => {
    return (
        <div className='review-section'>
            <h3><FaBell /> Get the Latest Updates from Here!</h3>
            <p>Get all the notifications of the latest products from us!</p>
            <p><Link to="#">Click here to get notifications</Link></p>
        </div>
    );
}

const AccountPage = () => {
    return (
        <div className='account'>
            {/* <Navigation /> */}
            <div className='content-section'>
                <Profile />
                <div className='section'>
                    <div className='main-section'>
                        <ProfileSection />
                        <Section />
                    </div>
                    <div className='main-section'>
                        <ContactSection />
                        <Notification />
                    </div>
                    {/* <div className='main-section'>
                        <ContactSection />
                        <Notification />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default AccountPage;

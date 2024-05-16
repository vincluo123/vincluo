import React from 'react';
import './AccountPage.css';
import { Link } from 'react-router-dom';


import { FaHome, FaShoppingCart, FaBox, FaUser, FaBell, FaQuestionCircle, FaCog, FaStar, FaHeart, FaSignOutAlt, FaShoppingBasket } from 'react-icons/fa';


export const AccountPage = () => {

    const Navigation = () => {
        return (<>
            <div className="side-navbar">
                <ul className='navigation'>
                    <li>
                        <Link to="/home" >
                            <FaHome style={{ color: ' #234e70' }} /> {/* Home icon */}
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/orders">
                            <FaShoppingCart style={{ color: ' #234e70' }} /> {/* Orders icon */}
                            Orders
                        </Link>
                    </li>

                    <li>
                        <FaBox style={{ color: ' #234e70' }} /> {/* Products icon */}
                        <a href="#">Products</a>
                    </li>

                    <li>
                        <FaUser style={{ color: ' #234e70' }} /> {/* Profile icon */}
                        <a href="#">Profile</a>
                    </li>

                    <li>
                        <Link to="/wishlist">
                            <FaHeart style={{ color: ' #234e70' }} /> {/* Wishlist icon */}
                            Wishlist
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <FaShoppingBasket style={{ color: ' #234e70' }} /> {/* Different cart icon */}
                            My Cart
                        </Link>
                    </li>

                    <li>
                        <Link to="/faq">
                            <FaQuestionCircle style={{ color: ' #234e70' }} /> {/* FAQ icon */}
                            Faq
                        </Link>

                    </li>

                    <li>
                        <FaSignOutAlt style={{ color: ' #234e70' }} /> {/* Logout icon */}
                        <a href="#">Logout</a>
                    </li>
                </ul>
                <div>
                </div>
                <p className='setting'>
                    <FaCog className='setting-icon' /> {/* Settings icon */}
                    <a href='#'>Settings</a>
                </p>
            </div>
        </>
        );
    }


    const Profile = () => {
        return (<>
            <div className="profile-details">
                <div className="profile-image">
                    <img src="./assets/profile.png" alt="" />
                    <h2 className='username'>James</h2>
                </div>

                <h2>Contact Details</h2>

                <div className='details'>
                    <h3>Name</h3>
                    <p>James</p>
                </div>

                <div className='details'>
                    <h3>Email</h3>
                    <p>james123@gmail.com</p>
                </div>

                <div className='details'>
                    <h3>Phone Number</h3>
                    <p>+91 9874563210</p>
                </div>

                <div className='details'>
                    <h3>Address</h3>
                    <p>36,Brown Drive,Lake Street,CBE</p>
                </div>

                <div className='details'>
                    <h3>Marketing</h3>
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
        </>)
    }

    const Section = () => {
        return (
            <>
                <div className="review-section">
                    <h3>
                        <FaStar />
                        My reviews
                    </h3>
                    <p>
                        Rate and review your recent purchases and
                        manage reviews you've submitted
                    </p>
                    <p>
                        <Link to="/orders">Review recent purchases</Link>
                    </p>
                </div>
            </>
        )
    }

    const ProfileSection = () => {
        return (
            <>
                <div className='review-section'>
                    <h3>
                        <FaUser style={{ color: ' #234e70' }} /> {/* Profile icon */}
                        My Details
                    </h3>
                    <p>Update your personal details,passwords & Manage your payment cards</p>

                    <p><a href="#">Edit My Details</a></p>
                    <p>
                        <a href="#">Edit Address </a>
                    </p>
                </div>
            </>
        )
    }

    const ContactSection = () => {
        return (
            <>
                <div className='review-section'>
                    <h3>
                        <FaUser style={{ color: ' #234e70' }} /> {/* Profile icon */}
                        Contact Us
                    </h3>
                    <p>See the status of any queries you're
                        raised with customer service Team
                    </p>

                    <p><a href="#">Call with Us</a></p>
                    <p>
                        <a href="#">Chat with Us </a>
                    </p>
                </div>
            </>
        )
    }

    const Notification = () => {
        return (
            <>
                <div className='review-section'>
                    <h3>
                        <FaBell /> {/* Bell icon */}
                        Get the Latest Updates from here!
                    </h3>
                    <p>Get all the Notification of the latest products
                        from us!!
                    </p>

                    <p><a href="#">click here to get Notification</a></p>
                </div>
            </>
        )

    }

    return (
        <div className='account'>
            <Navigation />

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
                    <div className='main-section'>
                        <ContactSection />
                        <Notification />
                    </div>
                </div>
            </div>



        </div>


    )
}

export default AccountPage;

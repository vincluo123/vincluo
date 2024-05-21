import React from 'react';
import '../cssfiles/AccountPage.css'


import { FaHome, FaShoppingCart, FaBox, FaUser, FaBell, FaQuestionCircle, FaCog, FaStar, FaHeart, FaSignOutAlt, FaShoppingBasket } from 'react-icons/fa';


export const AccountPage = () => {

    const Navigation = () => {
        return (<>
            <div className="side-navbar">
                <ul className='navigation'>
                    <li>
                        <FaHome style={{ color: ' #234e70' }} /> {/* Home icon */}
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <FaShoppingCart style={{ color: ' #234e70' }} /> {/* Orders icon */}
                        <a href="#">Orders</a>
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
                        <FaHeart style={{ color: ' #234e70' }} /> {/* Wishlist icon */}
                        <a href="#">Wishlist</a>
                    </li>
                    <li>
                        <FaShoppingBasket style={{ color: ' #234e70' }} /> {/* Different cart icon */}
                        <a href="#">My Cart</a>
                    </li>

                    <li>
                        <FaQuestionCircle style={{ color: ' #234e70' }} /> {/* FAQ icon */}
                        <a href="#">Faq</a>
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
                    <img src="profile.png" alt="" />
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
                        <a href="#">Review recent purchases</a>
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

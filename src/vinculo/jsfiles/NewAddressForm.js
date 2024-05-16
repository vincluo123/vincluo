import React, { useState } from 'react';
import '../cssfiles/NewAddressForm.css';

function NewAddressForm() {
  const [address, setAddress] = useState({
    name: '',
    pincode: '',
    mobileNumber: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
    alternatePhone: '',
    addressType: 'home',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(address);
  };

  return (
    <div className="new-address-form-container">
      <h2>New Address</h2>
      <form onSubmit={handleSubmit} className="address-form">
        <label>
          Name
          <input type="text" name="name" value={address.name} onChange={handleInputChange} />
        </label>
        <label>
          Mobile Number
          <input type="text" name="mobileNumber" value={address.mobileNumber} onChange={handleInputChange} />
        </label>
        <label>
          Address
          <input type="text" name="address" value={address.address} onChange={handleInputChange} />
        </label>
        <label>
          Pincode
          <input type="text" name="pincode" value={address.pincode} onChange={handleInputChange} />
        </label>
        <label>
          City
          <input type="text" name="city" value={address.city} onChange={handleInputChange} />
        </label>
        <label>
          State
          <input type="text" name="state" value={address.state} onChange={handleInputChange} />
        </label>
        <div className="address-type">
          <label>
            <input
              type="radio"
              name="addressType"
              value="home"
              checked={address.addressType === 'home'}
              onChange={handleInputChange}
            />
            Home
          </label>
          <label>
            <input
              type="radio"
              name="addressType"
              value="work"
              checked={address.addressType === 'work'}
              onChange={handleInputChange}
            />
            Work
          </label>
        </div>
        <div className="form-buttons">
          <button type="submit" className="save-btn">SAVE</button>
          <button type="button" className="cancel-btn">CANCEL</button>
        </div>
      </form>
    </div>
  );
}

export default NewAddressForm;

import React, { useState } from 'react';
import '../cssfiles/AddressForm.css'; // Make sure to create a corresponding CSS file

function AddressForm() {
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
    <div className="address-form-container">
      <h2>Manage Addresses</h2>
      <button className="new-address-btn">ADD A NEW ADDRESS</button>
      <button className="location-btn">Use my current location</button>
      <form onSubmit={handleSubmit} className="address-form">
        {/* Input fields for the form */}
        <label>
          Name
          <input type="text" name="name" value={address.name} onChange={handleInputChange} />
        </label>
        {/* Include other fields like pincode, mobileNumber, etc. */}
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

export default AddressForm;

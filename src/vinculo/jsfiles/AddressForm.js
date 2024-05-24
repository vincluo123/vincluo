import React, { useState } from 'react';
import '../cssfiles/AddressForm.css';

const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState('');
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddAddress = (e) => {
    e.preventDefault();

    if (newAddress.trim() !== '') {
      if (isEditing) {
        setAddresses(
          addresses.map((address) =>
            address.id === selectedAddressId
              ? { ...address, text: newAddress }
              : address
          )
        );
        setIsEditing(false);
        setSelectedAddressId(null);
      } else {
        const address = {
          id: addresses.length + 1,
          text: newAddress,
        };
        setAddresses([...addresses, address]);
      }
      setNewAddress('');
    }
  };

  const handleSelectAddress = (id) => {
    setSelectedAddressId(id);
  };

  const handleEditAddress = (id) => {
    const addressToEdit = addresses.find((address) => address.id === id);
    setNewAddress(addressToEdit.text);
    setSelectedAddressId(id);
    setIsEditing(true);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
    if (selectedAddressId === id) {
      setSelectedAddressId(null);
      setNewAddress('');
      setIsEditing(false);
    }
  };

  return (
    <div className="address-container">
      <h1>Address Page</h1>
      <form onSubmit={handleAddAddress}>
        <textarea
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          placeholder="Enter your address"
        ></textarea>
        <br />
        <button type="submit">{isEditing ? 'Save Address' : 'Add New Address'}</button>
      </form>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            <input
              type="radio"
              name="address"
              id={`address-${address.id}`}
              value={address.id}
              checked={selectedAddressId === address.id}
              onChange={() => handleSelectAddress(address.id)}
            />
            <label htmlFor={`address-${address.id}`}>{address.text}</label>
            <button className="edit" onClick={() => handleEditAddress(address.id)}>Edit</button>
            <button className="delete" onClick={() => handleDeleteAddress(address.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressForm;

import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [notification, setNotification] = useState('');

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist, product];
            setNotification(`${product.name} has been added to the wishlist.`);
            setTimeout(() => setNotification(''), 2000);
            return updatedWishlist;
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = prevWishlist.filter(item => item.id !== id);
            setNotification(`Item has been removed from the wishlist.`);
            setTimeout(() => setNotification(''), 2000);
            return updatedWishlist;
        });
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, notification }}>
            {children}
        </WishlistContext.Provider>
    );
};

import React, { useState, useEffect } from 'react';
import '../cssfiles/NotificationPage.css';
import notificationsData from '../jsonfiles/Notification.json';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    
    setNotifications(notificationsData);
  }, []);

  return (
    <div className="notification-page">
      <h1>Notifications</h1>
      <div className="notifications-list">
        {notifications.length === 0 ? (
          <p>No notifications available.</p>
        ) : (
          notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <h2>{notification.title}</h2>
              <p>{notification.message}</p>
              <span className="notification-date">{new Date(notification.date).toLocaleDateString()}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPage;

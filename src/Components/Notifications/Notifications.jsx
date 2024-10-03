// src/components/Notifications/Notifications.jsx
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { BellIcon } from '../Icon/Icons';

function Notifications() {
  return (
    <NavDropdown
      title={
        <>
          Notifications
          <BellIcon className="ms-2" id="notification-bell" />
        </>
      }
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
}

export default Notifications;

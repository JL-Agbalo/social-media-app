import React from 'react';
import { NavDropdown  } from 'react-bootstrap';
import { GearIcon, UserIcon, QuestionIcon, SignOutIcon } from '../Icon/Icons';

const Settings = () => {
  return (
    <NavDropdown 
    title={
      <>
      Settings
      <GearIcon className="ms-2"/>
      </>
    } id="basic-nav-dropdown" >
      <NavDropdown.Item href="#action/3.1">
      <UserIcon className="me-2"/> Account
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.2">
      <GearIcon className="me-2"/>
        Settings 
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.3">
      <QuestionIcon className="me-2"/> Sign Out
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">
      <SignOutIcon className="me-2"/> Sign Out
    </NavDropdown.Item>
</NavDropdown>
  );
};

export default Settings;

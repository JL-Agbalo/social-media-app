import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from '../Search/Search';
import Notifications from '../Notifications/Notifications';
import Settings from '../Settings/Settings';
import Container from 'react-bootstrap/Container';

const NavigationBar = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-2">
      <Container>
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home" className="">Social Media App</Navbar.Brand>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Notifications />
            <Settings />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

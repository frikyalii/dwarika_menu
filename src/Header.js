// Header.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Header.css'; // Import the CSS file for custom styles

const Header = () => {
  return (
    <header className="navbar navbar-dark bg-danger fixed-top animated fadeInDown">
      <Container>
        <span className="navbar-brand mb-0 h1">Dwarika executive menu</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Button variant="outline-light">Home</Button>
            </li>
            <li className="nav-item">
              <Button variant="outline-light">About</Button>
            </li>
            <li className="nav-item">
              <Button variant="outline-light">Contact</Button>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;

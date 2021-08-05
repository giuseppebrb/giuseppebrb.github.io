import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <p>© {new Date().getFullYear()} - Giuseppe Barbato</p>
      </Container>
    </footer>
  );
};

export default Footer;

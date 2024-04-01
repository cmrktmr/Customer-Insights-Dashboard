import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Footer = () => (
  <Navbar  bg="light">
    <Container>
      <Navbar.Text>
        &copy; {new Date().getFullYear()} Customer Insights Dashboard
      </Navbar.Text>
    </Container>
  </Navbar>
);

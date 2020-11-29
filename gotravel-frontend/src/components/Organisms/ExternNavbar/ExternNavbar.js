import React from 'react';
import { Navbar, Container, LogoWrapper, MenuItems } from './ExternNavbar.style';
import { ReactComponent as Logo } from '../../../assets/logo-blue.svg';
import { Link } from 'react-router-dom';

const ExternNavbar = ({ children }) => {
  return (
    <Navbar>
      <Container>
        <LogoWrapper>
          <Link to="/home">
            <Logo />
          </Link>
          <MenuItems></MenuItems>
        </LogoWrapper>
        {children}
      </Container>
    </Navbar>
  );
};

export default ExternNavbar;

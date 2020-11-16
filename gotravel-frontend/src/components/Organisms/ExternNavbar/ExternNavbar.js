import React from 'react';
import { Navbar, Container, LogoWrapper, MenuItems } from './ExternNavbar.style';
import { ReactComponent as Logo } from '../../../assets/logo-blue.svg';
import { Link } from 'react-router-dom';

const ExternNavbar = ({ first, second, children }) => {
  return (
    <Navbar>
      <Container>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <MenuItems>
            {/* <Link to="/"> */}
            <li>{first}</li>
            {/* </Link> */}
            {/* <Link> */}
            <li>{second}</li>
            {/* </Link> */}
          </MenuItems>
        </LogoWrapper>
        {children}
      </Container>
    </Navbar>
  );
};

export default ExternNavbar;

import React from 'react';
import { Navbar, LogoWrapper, MenuItems } from './ExternNavbar.style';
import { ReactComponent as Logo } from '../../../assets/logo-blue.svg';
import { Link } from 'react-router-dom';

const ExternNavbar = ({ first, second, children }) => {
  return (
    <Navbar>
      <LogoWrapper>
        <Logo />
        <MenuItems>
          <Link to="/">
            <li>{first}</li>
          </Link>
          <Link>
            <li>{second}</li>
          </Link>
        </MenuItems>
      </LogoWrapper>
      {children}
    </Navbar>
  );
};

export default ExternNavbar;

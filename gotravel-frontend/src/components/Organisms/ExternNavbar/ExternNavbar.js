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
          <MenuItems>
            <Link to="/">
              <li>Início</li>
            </Link>
            <Link to="/home">
              <li>Posts</li>
            </Link>
            <Link to="/dashboard">
              <li>Viagem</li>
            </Link>
            <Link to="/ultimasViagens">
              <li>Últimas viagens</li>
            </Link>
            <Link to="/itinerario">
              <li>Itinerario</li>
            </Link>
          </MenuItems>
        </LogoWrapper>
        {children}
      </Container>
    </Navbar>
  );
};

export default ExternNavbar;

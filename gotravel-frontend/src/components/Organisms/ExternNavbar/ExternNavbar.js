import React from 'react';
import { Navbar, LogoWrapper, MenuItems, BorderLi } from './ExternNavbar.style'
import { ReactComponent as Logo } from '../../../assets/logo-blue.svg'

const ExternNavbar = ({first, second, third}) => {
    return (
        <Navbar>
            <LogoWrapper>
            <Logo />
            </LogoWrapper>
            <MenuItems>
                <li>{first}</li>
                <li>{second}</li>
                <BorderLi>{third}</BorderLi>
            </MenuItems>
        </Navbar> 
    )
}

export default ExternNavbar;
import React from 'react';
import { Navbar, LogoWapper, MenuItems, BorderLi } from './ExternNavbar.style'
import { ReactComponent as Logo } from '../../assets/logo-blue.svg'

const ExternNavbar = ({first, second, third}) => {
    return (
        <Navbar>
            <LogoWapper>
            <Logo />
            </LogoWapper>
            <MenuItems>
                <li>{first}</li>
                <li>{second}</li>
                <BorderLi>{third}</BorderLi>
            </MenuItems>
        </Navbar> 
    )
}

export default ExternNavbar;
import React from 'react';
import { Navbar, LogoWapper } from './ExternNavbar.style'
import { ReactComponent as Logo } from '../../assets/logo-blue.svg'

const ExternNavbar = () => {
    return (
        <Navbar>
            <LogoWapper>
            <Logo />
            </LogoWapper>
        </Navbar> 
    )
}

export default ExternNavbar;
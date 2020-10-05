import React from 'react';
import { Navbar, LogoWrapper, MenuItems, ButtonWrapper } from './ExternNavbar.style'
import { ReactComponent as Logo } from '../../../assets/logo-blue.svg'
import Button from '../../Atoms/Button'
import { Link } from 'react-router-dom';

const ExternNavbar = ({first, second, textButton, textColorButton}) => {
    return (
        <Navbar>
            <LogoWrapper>
            <Logo />
                <MenuItems>
                    <li>{first}</li>
                    <li>{second}</li>
                </MenuItems>
            </LogoWrapper>
            <ButtonWrapper>
                <Link to="/auth">
                    <Button 
                        text={textButton}
                        textColor={textColorButton}
                    />  
                </Link>
            </ButtonWrapper>
        </Navbar> 
    )
}

export default ExternNavbar;
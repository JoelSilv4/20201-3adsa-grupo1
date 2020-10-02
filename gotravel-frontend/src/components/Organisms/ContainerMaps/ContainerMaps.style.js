import styled from 'styled-components';
import logoimg from '../../assets/logo-blue.svg';

export const Logo = styled.svg`
    position: absolute;
    z-index: 100;
    background-image: url(${logoimg});
    background-repeat: no-repeat;
    background-size: contain;
    height: 75px;
`;
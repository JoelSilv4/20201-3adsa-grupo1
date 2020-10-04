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

export const SearchDiv = styled.div`
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 400px;
    z-index: 10;
    
    h1 {
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: #281414;
        z-index: 10;
        margin: 0;
        padding: 0;
    }

    input {
        padding: 0.5rem;
        font-size: 1.5rem;
        width: 100%;
    }
`;

export const LocateButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    z-index: 10;

    img {
        width: 30px;
        cursor: pointer;
    }
`;
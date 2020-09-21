import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    height: 50px;
    width: 170px;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.color};
    &:hover{
        background-color: #216CFF;
        color: #ffff;
    }
`
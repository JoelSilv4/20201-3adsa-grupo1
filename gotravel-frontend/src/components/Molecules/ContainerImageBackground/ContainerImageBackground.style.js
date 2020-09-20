import styled from 'styled-components';

export const BackgroundImage = styled.section`
    background-image: url(${props => props.img});
    height: 515px;
    background-repeat: round;    
    display: flex;
    justify-content: center;
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 80px;
    color: ${props => props.color};
    padding-top: 140px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`


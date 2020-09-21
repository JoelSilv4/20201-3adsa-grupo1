import styled from 'styled-components';

export const ContainerInfo = styled.section`
    background-color: ${props => props.color};
    height: 425px;
    text-align: center;
`

export const TitleInfo = styled.h2`
    font-size: 45px;
    font-weight: 600;
    color: ${props => props.titleColor};
    padding-top: 32px;
`

export const IconWrapper = styled.div`
    padding-top: 32px;
    svg {
        height: 81px;
        width: 81px;
    }
`

export const DescriptionInfo = styled.p`
    font-size: 30px;
    padding: 32px 0 32px 0;
    color: ${props => props.titleColor};
`

export const DescriptionWrapper = styled.div`
    width: 650px;
    margin: auto;
`
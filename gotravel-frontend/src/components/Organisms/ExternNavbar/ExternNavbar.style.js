import styled from 'styled-components';

export const Navbar = styled.header`
    display: flex;
    height: 90px;
    top: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0 90px;
    justify-content: space-between;
`

export const LogoWapper = styled.div`
    display: flex;
    align-items: center;
    svg {
        width: 120px;
        height: 70px;
    }
`

export const MenuItems = styled.ul`
    display: flex;
    align-items: center;
    li {
        margin-left: 50px;
        cursor: pointer; 
        font-size: 20px;
    }
`

export const BorderLi = styled.li`
    border: 1px solid black;
    padding: 10px;
    font-weight: 600;
`
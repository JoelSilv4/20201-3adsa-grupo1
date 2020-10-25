import styled from 'styled-components';

export const Navbar = styled.header`
  display: flex;
  height: 70px;
  top: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 90px;
  justify-content: space-between;
  position: sticky;
  background-color: #ffffff;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 100px;
    height: 70px;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  li {
    margin-left: 50px;
    cursor: pointer;
    font-size: 18px;
    color: #2d73dd;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

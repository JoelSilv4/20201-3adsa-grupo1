import styled from 'styled-components';
import img from '../../../assets/foto_tela_login.png';

export const FirstContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const ArtContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled.form`
  color: black;

  div {
    display: flex;
    flex-direction: column;
    margin: 15px;
  }

  button {
    padding: 10px 15px;
    margin: 10px 0;
  }
`;

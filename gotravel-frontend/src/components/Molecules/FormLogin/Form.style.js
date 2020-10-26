import styled from 'styled-components';


export const FirstContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: #D9FFE8;

  h1 {
    font-weight: 600;
    font-size: 35px;
  }

  spam {
    color: #2D73DD;
  }
`;

export const ArtContainer = styled.div`

  width: 100%;
  height: 100%; 

svg{
  width: 100%;
  height: 100%;
}
`;

export const FormContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled.form`
  color: black;

  input {
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
    width: 350px;
    height: 55px;
    outline: 0;
    padding-left: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 15px;
  }

  button {
    width: 200px;
    height: 40px;
    left: 913px;
    top: 621px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #F0F0F0;
    color: black;
    font-size: 15px;
  }

  button:first-child {
    background-color: #2D73DD;
    color: white;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
`

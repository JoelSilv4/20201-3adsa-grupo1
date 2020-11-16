import styled from 'styled-components';
import logoimg from '../../../assets/logo-blue.svg';

export const MapWrapper = styled.div`
  .divider {
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .form {
      position: absolute;
      left: 0;
      width: fit-fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 30px;
      padding: 20px 20px;
      box-shadow: 5px 2px 15px 1px#525252;
      background: #f1f1f1;
      z-index: 99;

      h2 {
        margin-bottom: 10px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: #2c73dd;
      }

      .autocomplete {
        width: 20rem;
        border: 1px solid black;
        margin: 20px 0;
        padding: 10px;
        font-size: 1rem;
      }

      button {
        background: #4b84da;
        font-size: 0.8rem;
        font-weight: 600;
        padding: 15px 30px;
        border: 0px;
        border-radius: 10px;
        box-shadow: 2px 2px 10px 1px #8a8a8a;
      }
    }

    .map {
      height: 100%;
      width: 100%;
    }
  }
`;

import styled from 'styled-components';
import logoimg from '../../../assets/logo-blue.svg';

export const FormFiltros = styled.div`
  max-width: 1100px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  border-left: 1px solid #c3c3c3;
  border-right: 1px solid #c3c3c3;

  .title {
    width: 100%;
    margin-top: -40px;

    h2 {
      font-size: 28px;
      font-weight: 200;
      color: #818181;
    }
  }
`;

export const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: -50px;

  .divider {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .formWrapper {
      left: 0;
      top: 0;
      margin-top: 70px;
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 999;

      .form {
        height: 100vh;
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 10px;
        /* box-shadow: 5px 2px 15px 1px#525252; */
        background: #1a73e8;
        z-index: 99;

        h2 {
          margin: 10px 0;
          text-align: center;
          font-family: 'Lato';
          font-size: 16px;
          font-weight: 300;
          color: white;
        }

        .googleinput {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 0 20px;

          img {
            width: 15px;
            margin-right: 20px;
          }
        }

        .autocomplete {
          width: 240px;
          /* background-color: #22529b; */
          background-color: transparent;
          font-family: 'Lato';
          color: white;
          height: 18px;
          border: 0px;
          border-bottom: 1px solid #dadada;
          margin: 15px 0;
          font-size: 14px;
          text-align: left;
        }

        .openFilters {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 20px 20px;

          &:hover {
            cursor: pointer;
          }

          img {
            height: 20px;
          }

          p {
            margin-left: 10px;
            font-family: 'Lato';
            font-weight: 300;
            color: white;
          }
        }

        .filtersWrapper {
          width: 100%;
          margin-top: 10px;
          background-color: #0d376d;
        }

        .inputs {
          max-width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          background-color: white;
          padding: 10px 0;

          .filter {
            display: flex;
            flex-direction: row;
            margin: 5px 20px;

            img {
              width: 15px;
              height: 15px;
              margin-left: 15px;
              margin-right: 5px;
            }

            label {
              font-size: 16px;
            }
          }
        }
      }
    }
    .map {
      height: 100%;
      width: 100%;
    }
  }
`;

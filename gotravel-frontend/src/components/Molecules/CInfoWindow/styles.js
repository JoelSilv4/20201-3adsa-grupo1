import styled from 'styled-components';

export const Container = styled.div``;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  .cape {
    margin: 0 auto;
    max-height: 140px;
    width: 100%;
    background-position: center;
    background-size: cover;
  }

  .cape-unavailable {
    height: 0px;
    width: auto;
    background-color: #c3c3c3;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .name {
      margin: 5px 0px;
      font-family: 'Lato';
      font-size: 16px;
      font-weight: 400;
    }

    .endereco {
      width: 80%;
      margin: 5px 0px;
      font-family: 'Lato';
      font-size: 16px;
      font-weight: 300;
      color: #4e4e4e;
    }
  }

  .save {
    margin-left: auto;
    margin-bottom: 5px;
    padding: 10px;
    border: 0px;
    font-family: 'Lato';
    font-size: 14px;
    color: white;
    background-color: #1a73e8;
  }
`;

export const Nota = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 14px;
  color: gold;
`;

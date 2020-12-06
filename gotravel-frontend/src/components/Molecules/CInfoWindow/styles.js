import styled from 'styled-components';

export const Container = styled.div``;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cape {
    max-height: 140px;
  }

  .cape-unavailable {
    height: 0px;
    width: 0px;
  }

  .name {
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 300;
  }

  .save {
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 10px;
    border: 0px;
    font-family: 'Lato';
    font-size: 14px;
    color: white;
    background-color: #1a73e8;
  }
`;

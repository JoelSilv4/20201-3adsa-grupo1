import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 10px;

    img {
      width: 30px;
      height: 30px;
    }

    p {
      font-size: 14px;
      color: black;
      text-align: center;
      margin-left: 10px;
    }
  }
`;

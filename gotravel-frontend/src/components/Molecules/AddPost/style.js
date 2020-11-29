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

    &:hover {
      cursor: pointer;

      img {
        width: 35px;
        height: 35px;
      }
    }

    img {
      width: 30px;
      height: 30px;
      transition: 0.25s;
    }

    p {
      font-size: 14px;
      color: black;
      text-align: center;
      margin-left: 10px;
    }
  }
`;

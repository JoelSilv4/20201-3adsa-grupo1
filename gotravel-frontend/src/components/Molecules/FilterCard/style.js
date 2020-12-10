import styled from 'styled-components';

export const Card = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .preview {
    width: 80px;
    height: 80px;
  }

  .content {
    margin-left: 10px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .name {
      font-family: 'Lato';
      font-weight: 500;
      font-size: 16px;
    }

    .endereco {
      margin: 5px 0;
      font-family: 'Lato';
      font-weight: 400;
      font-size: 12px;
    }

    .buttons {
      margin-top: auto;

      .remover {
        background-color: white;
        height: 25px;
        padding: 0 10px;
        border-radius: 15px;
        border: 1px solid #ff6961;
        color: #ff6961;

        &:hover {
          cursor: pointer;
          background-color: #ff6961;
          color: white;
        }
      }
    }
  }
`;

export const NoImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #c3c3c3;
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #ccc;
  width: 100%;
`;

export const NothingHere = styled.div`
  background: honeydew;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Lato';

  h1 {
    color: black;
  }

  h3 {
    color: #808080;
  }

  img {
    width: 100px;
  }
`;

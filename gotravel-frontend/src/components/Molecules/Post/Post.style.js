import styled from 'styled-components';

let mainWidth = '1100px';
let sideWidth = '140px';
let contentWidth = '960px';

export const Container = styled.div`
  width: ${mainWidth};
  border: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SideInfo = styled.div`
  margin: 20px 0;
  width: ${sideWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profile-pic {
    img {
      margin: 15px 0;
      width: 60px;
      height: 60px;
      border-radius: 80px;
    }
  }

  .actions {
    margin-top: auto;

    div {
      margin: 20px 0;
      display: flex;
      flex-direction: column;

      img {
        height: 20px;
        margin-bottom: 5px;
      }

      p {
        text-align: center;
        font-size: 14px;
      }
    }
  }
`;

export const Content = styled.div`
  margin: 20px 0;
  width: ${contentWidth};

  .name {
    font-size: 18px;
    color: black;
    margin: 15px 0;
  }

  .comment {
    font-size: 16px;
    color: #909090;
  }

  .photo {
    margin: 10px 0;
    margin-right: 40px;
    width: 940px;
    height: 150px;
  }
`;

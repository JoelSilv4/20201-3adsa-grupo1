import React, { useEffect } from 'react';

import { Container, Content, SideInfo } from './Post.style';

import svg_copy from '../../../assets/copy.svg';
import svg_heart from '../../../assets/heart.svg';
import PostMap from '../PostMap/PostMap';

function Post({ center }) {
  return (
    <Container>
      <SideInfo>
        <div className="profile-pic">
          <img src="https://avatarfiles.alphacoders.com/893/thumb-89303.gif" alt="" />
        </div>
        <div className="actions">
          <div>
            <img src={svg_heart} alt="" />
            <p>Amei</p>
          </div>
          <div>
            <img src={svg_copy} alt="" />
            <p>Copiar</p>
          </div>
        </div>
      </SideInfo>
      <Content>
        <div className="name">Henrique Albuquerque Barreto</div>
        <div className="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorem asperiores sit deserunt fugiat ipsa voluptas eos quis dolore porro consequuntur velit eveniet enim eius modi voluptates quas, natus expedita?</div>
        <div className="photo">
          <PostMap center={center} />
        </div>
      </Content>
    </Container>
  );
}

export default Post;

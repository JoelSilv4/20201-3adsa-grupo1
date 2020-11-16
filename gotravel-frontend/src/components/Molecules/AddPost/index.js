import React, { useEffect } from 'react';

import svg_addbutton from '../../../assets/add_button.svg';
import { Container } from './style';

function AddPost() {
  return (
    <Container>
      <div>
        <img src={svg_addbutton} alt="" />
        <p>Adicionar Post</p>
      </div>
    </Container>
  );
}

export default AddPost;

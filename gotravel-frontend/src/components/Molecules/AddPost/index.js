import React, { useEffect } from 'react';

import svg_addbutton from '../../../assets/add_button.svg';
import FormPost from '../FormPost/FormPost';
import { Container } from './style';

function AddPost() {
  const handlePost = () => {};

  return (
    <Container>
      <div onClick={handlePost}>
        <img src={svg_addbutton} alt="" />
        <p>Adicionar Post</p>
      </div>
    </Container>
  );
}

export default AddPost;

import React, { useContext, useEffect } from 'react';
import DispatchContext from '../../../DispatchContext';

import svg_addbutton from '../../../assets/add_button.svg';
import { Container } from './style';

function AddPost() {
  const appDispatch = useContext(DispatchContext);

  const handlePost = () => {
    appDispatch({ type: 'show-form-post' });
  };

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

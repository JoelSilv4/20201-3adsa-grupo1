import React, { useContext, useEffect } from 'react';
import DispatchContext from '../../../DispatchContext';

import svg_addbutton from '../../../assets/add_button.svg';
import svg_listsolid from '../../../assets/list_solid.svg';
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
      <div className="mytrips" onClick={handlePost}>
        <img src={svg_listsolid} alt="" />
        <p>Minhas Viagens</p>
      </div>
    </Container>
  );
}

export default AddPost;

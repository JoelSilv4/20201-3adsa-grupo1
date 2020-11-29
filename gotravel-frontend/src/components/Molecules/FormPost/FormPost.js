import React, { useContext, useEffect } from 'react';
import { Container, SideInfo, Content } from './FormPost.style';

import svg_copy_greyed from '../../../assets/copy_greyed.svg';
import svg_heart_greyed from '../../../assets/heart_greyed.svg';

import DispatchContext from '../../../DispatchContext';

function FormPost() {
  const appDispatch = useContext(DispatchContext);

  function handleClose() {
    appDispatch({ type: 'show-form-post' });
  }

  return (
    <Container>
      <div className="wrapper">
        <SideInfo>
          <div className="profile-pic">
            <img src="https://avatarfiles.alphacoders.com/893/thumb-89303.gif" alt="" />
          </div>
          <div className="actions">
            <div>
              <img src={svg_heart_greyed} alt="" />
              <p>Amei</p>
            </div>
            <div>
              <img src={svg_copy_greyed} alt="" />
              <p>Copiar</p>
            </div>
          </div>
        </SideInfo>
        <Content>
          <div className="name">
            <p>Henrique Albuquerque</p>
            <button onClick={handleClose}>x</button>
          </div>
          <div className="comment">
            <textarea placeholder="Seu comentário vem aqui" autoComplete="off" autoFocus="true"></textarea>
          </div>
          <div className="buttons">
            <button className="adicionar">Adicionar Viagem</button>
            <button className="publicar">Publicar</button>
          </div>
        </Content>
      </div>
    </Container>
  );
}

export default FormPost;

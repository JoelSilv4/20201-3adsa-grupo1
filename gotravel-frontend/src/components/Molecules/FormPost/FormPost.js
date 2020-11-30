import React, { useContext, useEffect, useState } from 'react';
import { Container, SideInfo, Content } from './FormPost.style';

import svg_copy_greyed from '../../../assets/copy_greyed.svg';
import svg_heart_greyed from '../../../assets/heart_greyed.svg';

import DispatchContext from '../../../DispatchContext';
import Axios from 'axios';
import StateContext from '../../../StateContext';

function FormPost() {
  const [tripMenu, setTripMenu] = useState(false);
  const [trips, setTrips] = useState(false);
  const [postBody, setPostBody] = useState(null);

  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleClose() {
    appDispatch({ type: 'show-form-post' });
  }

  function handleTrip() {
    setTripMenu(!tripMenu);
  }

  function handlePublish() {
    Axios.post('', { headers: { authorization: appState.user.jwtkey } });
  }

  useEffect(() => {
    Axios.get(`/trip/${appState.user.id}`, { headers: { authorization: appState.user.jwtkey } }).then((e) => {
      if (e.data != null) {
        // Todo
      } else {
        setTrips(null);
      }
    });
  }, []);

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
            <button className="adicionar" onClick={handleTrip}>
              Adicionar Viagem
            </button>
            <button className="publicar" onClick={handlePublish}>
              Publicar
            </button>
          </div>

          {tripMenu ? (
            <ul className="yourTrips">
              {trips.length > 0 ? (
                <li className="trip">
                  <p>Rua Ibitira - Rua Tibúrcio de Souza</p>
                </li>
              ) : (
                <li className="trip">
                  <p>Você ainda não tem nenhuma viagem salva.</p>
                </li>
              )}
            </ul>
          ) : (
            <></>
          )}
        </Content>
      </div>
    </Container>
  );
}

export default FormPost;

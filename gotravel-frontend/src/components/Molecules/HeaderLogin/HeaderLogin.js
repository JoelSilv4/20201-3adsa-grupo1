import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../../../StateContext';
import DispatchContext from '../../../DispatchContext';
import LogoffWrapper from './HeaderLogin.style';

import svg_rectangle from '../../../assets/rectangle.svg';

function HeaderLogin() {
  const [profilePic, setProfilePic] = useState();
  const [menu, setMenu] = useState(false);

  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function handleLogoff() {
    // appDispatch({ type: 'logout' });
    setMenu(!menu);
  }

  return (
    <LogoffWrapper>
      <p>{`Bem vindo ${appState.user.name}`}</p>

      <div className="profile" onClick={handleLogoff}>
        <img className="profilePic" src={profilePic || 'https://iela.ufsc.br/sites/default/files/default_images/default-user.png'} alt="" />
        <img className="rectangle" src={svg_rectangle} alt="" />
      </div>

      <div className={`options ${menu ? 'visible' : 'notvisible'}`}>
        <ul>
          <li key="0">Minha conta</li>
          <li key="1">Sair</li>
        </ul>
      </div>
    </LogoffWrapper>
  );
}

export default HeaderLogin;

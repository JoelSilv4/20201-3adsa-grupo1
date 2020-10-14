import React, { useContext, useEffect } from 'react';
import Button from '../../Atoms/Button';
import { ButtonWrapper } from '../../Organisms/ExternNavbar/ExternNavbar.style';
import StateContext from '../../../StateContext';
import DispatchContext from '../../../DispatchContext';
import LogoffWrapper from './HeaderLogin.style';

function HeaderLogin() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function handleLogoff() {
    appDispatch({ type: 'logout' });
  }

  return (
    <LogoffWrapper>
      <h1>{`Bem vindo ${appState.user.name}`}</h1>

      <ButtonWrapper>
        <Button onclick={handleLogoff} text={'Deslogar'} textColor={'#2D73DD'} />
      </ButtonWrapper>
    </LogoffWrapper>
  );
}

export default HeaderLogin;

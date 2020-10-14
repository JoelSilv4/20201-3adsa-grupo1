import React, { useContext, useEffect } from 'react';
import ExternNavbar from '../ExternNavbar';
import StateContext from '../../../StateContext';
import HeaderLogout from '../../Molecules/HeaderLogout/HeaderLogout';
import HeaderLogin from '../../Molecules/HeaderLogin/HeaderLogin';

function Navbar() {
  const appState = useContext(StateContext);

  return (
    <ExternNavbar first="Home" second="Sobre">
      {appState.logged ? <HeaderLogin /> : <HeaderLogout />}
    </ExternNavbar>
  );
}

export default Navbar;
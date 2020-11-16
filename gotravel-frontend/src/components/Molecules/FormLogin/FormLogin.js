import React, { useContext, useState } from 'react';
import Axios from 'axios';
import Label from '../../Atoms/Label/label';
import { FirstContainer, ArtContainer, FormContainer, FormStyle, ContainerButtons } from './Form.style';
import { ReactComponent as Img } from '../../../assets/mulher-carro.svg';
import DispatchContext from '../../../DispatchContext';

import spinnersvg from '../../../assets/spinner-solid.svg';

const FormLogin = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState('');

  const appDispatch = useContext(DispatchContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }

    setSpinner(true);
    Axios.post('/usuario/logn', { email, password })
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {
            setError(false);
            setSpinner(false);
            appDispatch({ type: 'login', data: response.data });
          }, 1000);
        } else if (response.status === 404) {
          setError('Usuário ou senha incorretos');
          setSpinner(false);
        }
      })
      .catch((fail) => {
        console.error('EPIC FAIL: ', fail);
        setSpinner(false);
      });
  }

  return (
    <FirstContainer>
      <ArtContainer>
        <Img />
      </ArtContainer>

      <FormContainer>
        <h1>
          Dê um <spam>GO!</spam> e faça o login!
        </h1>

        <FormStyle autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <div>
              <Label htmlFor="email" text={'E-mail'} />
              <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="email@provedor.com.br" />
            </div>

            {error ? <small>{error}</small> : <></>}

            <div>
              <Label htmlFor="password" text="Senha" />
              <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="****" />
            </div>

            <ContainerButtons>
              {!spinner ? (
                <button className="login" type="submit">
                  Logar
                </button>
              ) : (
                <button className="login loading" type="submit">
                  <img src={spinnersvg} alt="" />
                </button>
              )}

              <button onClick={() => appDispatch({ type: 'form-register' })}>Cadastrar uma conta</button>
            </ContainerButtons>
          </div>
        </FormStyle>
      </FormContainer>
    </FirstContainer>
  );
};

export default FormLogin;

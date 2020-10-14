import React, { useContext, useState } from 'react';
import Axios from 'axios';
import Label from '../../Atoms/Label/label';
import { FirstContainer, ArtContainer, FormContainer, FormStyle } from './Form.style';
import DispatchContext from '../../../DispatchContext';

const FormLogin = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const appDispatch = useContext(DispatchContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await Axios.post('/usuario/logn', { email, password });

      if (response.status === 200) {
        appDispatch({ type: 'login', data: response.data });
        console.log('Logado.');
      } else if (response.status === 404) {
        console.log('Usuário ou senha incorretos.');
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <FirstContainer>
      <FormContainer>
        <h1>
          Dê um <spam>GO!</spam> e faça o login!
        </h1>

        <FormStyle onSubmit={handleSubmit}>
          <div>
            <div>
              <Label htmlFor="email" text={'E-mail'} />
              <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="email@provedor.com.br" />
            </div>

            <div>
              <Label htmlFor="password" text="Senha" />
              <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" id="password" placeholder="****" />
            </div>

            <button type="submit">Logar</button>

            <button onClick={() => appDispatch({ type: 'form-register' })}>Cadastrar uma conta</button>
          </div>
        </FormStyle>
      </FormContainer>

      <ArtContainer>{/* <img src={require('../../../assets/foto_tela_login.png')} /> */}</ArtContainer>
    </FirstContainer>
  );
};

export default FormLogin;

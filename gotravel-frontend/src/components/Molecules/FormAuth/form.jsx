import React from 'react';
import styled from 'styled-components';
import Input from '../../Atoms/Input/input';
import Label from '../../Atoms/Label/label';
import Button from '../../Atoms/Button/Button';
import { 
  FirstContainer,
  ArtContainer,
  FormContainer,
  FormStyle
} from './form.style';

const FormLogin = ({ register, handleSubmit, submitting }) => {

  return (
    <FirstContainer>
      <ArtContainer>

      </ArtContainer>
      <FormContainer>
        <h1>Dê um <spam>GO!</spam> e faça o login!</h1>

        <FormStyle
          onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" text={'E-mail'} />
            <Input
              type="text"
              name="email"
              id="email"
              ref={register}
              placeholder="email@provedor.com.br"
              />
          </div>
          
          <div>
            <Label htmlFor="password" text="Senha" />
            <Input
              type="text"
              name="password"
              id="password"
              ref={register}
              placeholder="****"
              />
          </div>
          
          <button type="submit" disabled={submitting}>Logar</button>
        </FormStyle>
      </FormContainer>
    </FirstContainer>
  )
};

export default FormLogin;
import { set } from 'date-fns';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormLogin from '../../Molecules/FormAuth/form';

const url_api = 'http://localhost:8080';

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
      defaultValues: {
          email: 'henrique_barretto@outlook.com',
          password: 'H#Henrique3'
      }
  });

  const [submitting, setSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);

  return <FormLogin 
            register={register}
            handleSubmit={handleSubmit(async (formData) => {
              if (!submitting) {
                setSubmitting(true);
                setServerErrors([]);
              }

              const response = await fetch(`${url_api}/usuario/logn`, {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  email: formData.email,
                  password: formData.password
                })
              });

              const result = await response.json();

              console.log(result);
            })}
            submitting={submitting}
          />;
}

export default Login;
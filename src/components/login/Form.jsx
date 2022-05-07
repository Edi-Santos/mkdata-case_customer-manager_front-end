import React, { useState } from 'react';

import InputName from './InputName';
import InputPassword from './InputPassword';

function Form() {
  const [loginDatas, setLoginDatas] = useState({
    name: 'Admin',
    password: '#admin2@#',
  });

  // Função para alterar o estado apenas para retirar mensagens de warning do console
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setLoginDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name, password } = loginDatas;

  return (
    <form>
      <h2>Login</h2>
      <InputName name={ name } onChange={ handleChange } />
      <InputPassword password={ password } onChange={ handleChange } />
    </form>
  );
}

export default Form;

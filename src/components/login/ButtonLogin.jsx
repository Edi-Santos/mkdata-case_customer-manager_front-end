import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLogin() {
  return (
    <Link to="/customers" className="login-bt">
      ENTRAR
    </Link>
  );
}

export default ButtonLogin;

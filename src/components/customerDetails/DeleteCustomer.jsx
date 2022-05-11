import React from 'react';
import { useParams } from 'react-router-dom';

import request from '../../services/fetchToAPI';

function DeleteCustomer() {
  const { id } = useParams();

  const handleClick = async () => {
    const localURL = `http://localhost:3001/customer/delete/${id}`;
    // const cloudURL = `https://mkdata-case-2822.herokuapp.com/customer/delete/${id}`;
    const method = 'PUT';
    const headers = {
      'Content-type': 'application/json',
    };
    const body = {
      ativo: false,
    };

    await request(localURL, method, headers, JSON.stringify(body));
    window.location.reload(true);
  };

  return (
    <button type="reset" onClick={ handleClick }>
      DELETAR
    </button>
  );
}

export default DeleteCustomer;

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import MyContext from '../../contextAPI/MyContext';

import request from '../../services/fetchToAPI';

function DeleteCustomer() {
  const { allCustomers: { customers } } = useContext(MyContext);
  const { id } = useParams();

  const customer = customers && customers.find((cust) => cust.id === parseInt(id, 10));

  const changingStatus = customer.ativo || false;

  const handleClick = async () => {
    const localURL = `http://localhost:3001/customer/delete/${id}`;
    // const cloudURL = `https://mkdata-case-2822.herokuapp.com/customer/delete/${id}`;
    const method = 'PUT';
    const headers = {
      'Content-type': 'application/json',
    };
    const body = {
      ativo: changingStatus,
    };

    const requesting = await request(localURL, method, headers, JSON.stringify(body));

    console.log(requesting);
    window.location.reload(true);
  };

  return (
    <button type="reset" onClick={ handleClick }>
      DELETAR
    </button>
  );
}

export default DeleteCustomer;

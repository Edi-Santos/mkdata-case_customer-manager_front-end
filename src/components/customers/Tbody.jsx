import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MyContext from '../../contextAPI/MyContext';

function Tbody() {
  const { allCustomers: { customers } } = useContext(MyContext);

  const navigate = useNavigate();

  return customers.map((customer, index) => {
    const { id, nome, grupo, ativo } = customer;

    return (
      <tr key={ index } onClick={ () => navigate(`/customer/${id}`) }>
        <td>{ nome }</td>
        <td>{ grupo }</td>
        <td>{ ativo ? 'ativo' : 'inativo' }</td>
      </tr>
    );
  });
}

export default Tbody;

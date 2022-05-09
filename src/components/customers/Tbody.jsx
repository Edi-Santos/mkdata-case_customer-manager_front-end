import React, { useContext } from 'react';

import MyContext from '../../contextAPI/MyContext';

function Tbody() {
  const { allCustomers: { customers } } = useContext(MyContext);

  return customers.map((customer, index) => (
    <tr key={ index }>
      <td>{ customer.nome }</td>
      <td>{ customer.grupo }</td>
      <td>{ customer.ativo ? 'ativo' : 'inativo' }</td>
    </tr>
  ));
}

export default Tbody;

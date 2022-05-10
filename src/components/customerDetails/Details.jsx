import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import MyContext from '../../contextAPI/MyContext';

function Details() {
  const { allCustomers: { customers } } = useContext(MyContext);

  const { id } = useParams();

  const customer = customers && customers.find((cust) => cust.id === parseInt(id, 10));
  const {
    nome, tipo, grupo, 'CPF/CNPJ': cpfCnpj, RG, data_cadastro: dataCadastro, ativo,
  } = customer;

  return (
    <>
      <p>{ `Nome: ${nome}`}</p>
      <p>{ `Tipo: ${tipo}`}</p>
      <p>{ `Grupo: ${grupo}`}</p>
      <p>{ `CPF/CNPJ: ${cpfCnpj}`}</p>
      <p>{ `RG: ${RG}`}</p>
      <p>{ `Data de cadastro: ${dataCadastro}`}</p>
      <p>{ `Status: ${ativo ? 'ativo' : 'inativo'}`}</p>
    </>
  );
}

export default Details;

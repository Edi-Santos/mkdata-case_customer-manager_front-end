import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import MyContext from '../../contextAPI/MyContext';

import InputName from './InputName';
import InputType from './InputType';
import InputCPFCNPJ from './InputCPFCNPJ';
import InputRG from './InputRG';
import InputGroup from './InputGroup';

import request from '../../services/fetchToAPI';

function Form() {
  // Estado do componente
  const [inputs, setInputs] = useState({
    nome: '', tipo: '', 'CPF/CNPJ': '', RG: '', grupo: '',
  });

  // Estado global
  const { allCustomers: { customers } } = useContext(MyContext);
  const { id } = useParams();

  // Filtro para encontrar um cliente que está no estado global
  const customer = customers && customers.find((cust) => cust.id === parseInt(id, 10));

  useEffect(() => {
    const { nome, tipo, 'CPF/CNPJ': cpfCnpj, RG, grupo } = customer;

    setInputs({
      nome,
      tipo,
      'CPF/CNPJ': cpfCnpj,
      RG,
      grupo,
    });
  }, [customer]);

  console.log(customer);

  const handleClick = async () => {
    // const localURL = `http://localhost:3001/customer/${id}`;
    const cloudURL = `https://mkdata-case-2822.herokuapp.com/customer/${id}`;
    const method = 'PUT';
    const headers = {
      'Content-type': 'application/json',
    };
    const body = { ...inputs };

    await request(cloudURL, method, headers, JSON.stringify(body));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <InputName nome={ inputs.nome } onChange={ handleChange } />
      <InputType tipo={ inputs.tipo } onChange={ handleChange } />
      <InputCPFCNPJ cpfCnpj={ inputs['CPF/CNPJ'] } onChange={ handleChange } />
      <InputRG RG={ inputs.RG } onChange={ handleChange } />
      <InputGroup grupo={ inputs.grupo } onChange={ handleChange } />
      <Link to={ `/customer/${id}` } onClick={ handleClick }>
        ATUALIZAR
      </Link>
    </form>
  );
}

export default Form;

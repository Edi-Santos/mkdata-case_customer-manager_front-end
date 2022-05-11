import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import request from '../services/fetchToAPI';

import MyContext from './MyContext';

function Provider({ children }) {
  const [allCustomers, setAllCustomers] = useState([]);

  useEffect(() => {
    const getingCustomers = async () => {
      const localUrl = 'http://localhost:3001/customer';
      // const CloudUrl = 'https://mkdata-case-2822.herokuapp.com/customer';
      const method = 'GET';
      const headers = {
        'Content-type': 'application/json; charset=UTF8',
      };

      const { customers } = await request(localUrl, method, headers);

      setAllCustomers((prevState) => ({
        ...prevState,
        customers,
      }));
    };

    getingCustomers();
  }, []);

  const contextValue = {
    allCustomers,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;

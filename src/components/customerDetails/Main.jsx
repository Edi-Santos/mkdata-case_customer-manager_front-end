import React from 'react';

import Details from './Details';
import BackToCustomers from './BackToCustomers';
import UpdateCustomer from './UpdateCustomer';
import DeleteCustomer from './DeleteCustomer';

import './main.css';

function Main() {
  return (
    <main className="main-details">
      <Details />
      <div>
        <UpdateCustomer />
        <DeleteCustomer />
      </div>
      <BackToCustomers />
    </main>
  );
}

export default Main;

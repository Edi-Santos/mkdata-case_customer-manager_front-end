import React from 'react';

import Details from './Details';
import BackToCustomers from './BackToCustomers';
import UpdateCustomer from './UpdateCustomer';
import DeleteCustomer from './DeleteCustomer';

function Main() {
  return (
    <main>
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
